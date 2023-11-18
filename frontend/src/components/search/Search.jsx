import React, { useState, useEffect } from "react";
import "./search.css";
import CategoryCard from "../cards/category-card/CategoryCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  let arrayFilteredData = [];
  useEffect(() => {
    // Realiza la solicitud GET al servidor para obtener las categorías
    fetch("http://localhost:3030/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
        setLoading(false);
      });
  }, []);

  const onChangeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    if (event.target.value == ""){
      arrayFilteredData = [];
    } else{
      data.forEach((category) => {
        if (
          category.name.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          arrayFilteredData.push(category);
        } else if (event.target.value == "") {
          arrayFilteredData = [];
        }
      });  
    }
    setFilteredData(arrayFilteredData);
  };

  return (
    <>
      <div className="category-container">
        <div className="category-searcher">
          <input
            placeholder="Buscá algo..."
            autoFocus
            type="text"
            value={search}
            onChange={(event) => onChangeSearch(event)}
          />
        </div>
      </div>
      <div className="category-list-cards">
        {filteredData ? (
          filteredData.map((category, idx) => (
            <CategoryCard key={idx} {...category} />
          ))
        ) : (
          <h1>Loading categories...</h1>
        )}
      </div>
    </>
  );
};

export default Search;
