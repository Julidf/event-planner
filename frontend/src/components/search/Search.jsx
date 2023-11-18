import React, { useState, useEffect } from "react";
import "./search.css";
import CategoryCard from "../cards/category-card/CategoryCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  let arrayFilteredData = [];

  useEffect(() => {
    // Realiza la solicitud GET al servidor para obtener las categorías
    fetch("http://localhost:3030/services/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los servicios:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Realiza la solicitud GET al servidor para obtener las categorías
    fetch("http://localhost:3030/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  const findCategories = () => {
    arrayFilteredData = [];
    setSearch(search);
    if (search == "") {
      arrayFilteredData = [];
    } else {
      let category = categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
      );
      if (category != undefined) {
        console.log("category", category);
        arrayFilteredData = data.filter(
          (service) => category.find((cat) => cat.id == service.category)
        );
      }

      if (arrayFilteredData.length == 0) {
        arrayFilteredData = data.filter((service) =>
          service.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      console.log(arrayFilteredData);
    }
    setFilteredData(arrayFilteredData);
  };

  return (
    <>
      <div className="category-container">
        <div className="category-searcher">
          <input
            placeholder="Busca un servicio o escribe una categoria..."
            autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={findCategories} type="button">
            Buscar
          </button>
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
