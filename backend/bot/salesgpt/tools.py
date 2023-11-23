from langchain.agents import Tool
import json
import os
from typing import Any, Dict, Optional
from langchain.callbacks.manager import (
    AsyncCallbackManagerForToolRun,
    CallbackManagerForToolRun,
)
from langchain.utilities.requests import TextRequestsWrapper
from langchain.tools.base import BaseTool
from langchain.agents import load_tools
from langchain.tools import StructuredTool,BaseTool,BaseRequestsTool
from langchain.chains import RetrievalQA
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.document_loaders import TextLoader


def setup_knowledge_base(product_catalog: str = None):
    """
    We assume that the service catalog is simply a text string.
    """
    oneFile = True
    # load product catalog
    documents = []
    if len(product_catalog) == 0:
        oneFile = False
        for file in os.listdir('businessData'):
            if file.endswith('.txt'):
                text_path = './businessData/' + file
                loader = TextLoader(text_path)
                documents.extend(loader.load())

    else:
        with open(product_catalog, "r") as f:
            product_catalog = f.read()
    
    llm = OpenAI(temperature=0)
    if oneFile:
        text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=1)
        texts = text_splitter.split_text(product_catalog)

        embeddings = OpenAIEmbeddings()
        docsearch = Chroma.from_texts(
            texts, embeddings, collection_name="product-knowledge-base"
        )

        knowledge_base = RetrievalQA.from_chain_type(
            llm=llm, chain_type="stuff", retriever=docsearch.as_retriever(search_kwargs={'k': 6})
        )

    else:
        text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=1)
        documents = text_splitter.split_documents(documents)

        vectordb = Chroma.from_documents(documents, embedding=OpenAIEmbeddings())# persist_directory="./data"
        #vectordb.persist()
        knowledge_base = RetrievalQA.from_chain_type(
            llm=llm, chain_type="stuff", retriever=vectordb.as_retriever(search_kwargs={'k': 6})
        )
    return knowledge_base

class RequestsPostTool(BaseRequestsTool, BaseTool):
    """Tool for making a POST request to the API."""

    name: str = "requests_post"
    description: str = """Use this when you want to POST the order.
    Input should be a json string with one key: "data".
    The value of "data" should be an array of objects with each containing 
    the following properties: "serviceId", "description" and "price" 
    for each of the services the user agreed as a Services bundle.
    Be careful to always use double quotes for strings in the json string
    The output will be the text response of the POST request.
    """

    def _run(
        self, text: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Run the tool."""
        try:
            data = _parse_input(text)
            return self.requests_wrapper.post("http://api:3030/bundle/create", data["data"])
        except Exception as e:
            return repr(e)

    async def _arun(
        self,
        text: str,
        run_manager: Optional[AsyncCallbackManagerForToolRun] = None,
    ) -> str:
        """Run the tool asynchronously."""
        try:
            data = _parse_input(text)
            return await self.requests_wrapper.apost(
                "http://api:3030/bundle/create", data["data"]
            )
        except Exception as e:
            return repr(e)

def get_tools(knowledge_base):
    tools = [
        Tool(
            name="ServicesSearch",
            func=knowledge_base.run,
            description="useful for retriving information about services",
        ),
        #RequestsPostTool(name='order_post', description='Use this when you want to POST the order.\n Input should be a json string with one key: "data".\n The value of "data" should be an array of objects with each containing the following properties: "serviceId", "description" and "price" for each of the services the user agreed as a Services bundle.\n Be careful to always use double quotes for strings in the json string.\n The output will be the text response of the POST request.\n', args_schema=None, return_direct=False, verbose=False, callbacks=None, callback_manager=None, requests_wrapper=TextRequestsWrapper(headers=None, aiosession=None)),
    ]

    return tools
