import React, { useState, useEffect } from "react";
import "./search.css";
import CategoryCard from "../cards/category-card/CategoryCard";

const Search = ({ param }) => {
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

  // Agregar espera de los dos primeros useEffect para que se carguen los datos
  useEffect(() => {
    if (param != undefined) {
      findServices(param);
    }
  }, [data, categories]);

  const findServices = (param) => {
    arrayFilteredData = [];
    let category = categories.find(
      (category) => category.name.toLowerCase() == param
    );
    if (category != undefined) {
      arrayFilteredData = data.filter((service) => service.category == category.id);
    }
    setFilteredData(arrayFilteredData);
  };

  const findCategories = () => {
    arrayFilteredData = [];
    let category = categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category != undefined) {
      arrayFilteredData = data.filter((service) =>
        category.find((cat) => cat.id == service.category)
      );
    }

    if (arrayFilteredData.length == 0) {
      arrayFilteredData = data.filter((service) =>
        service.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredData(arrayFilteredData);
  };

  const getCategoryName = (id) => {
    let category = categories.find((category) => category.id == id);
    if (category == undefined) {
      return "";
    }
    return category.name;
  }

  const getPrice = (service) => {
    return service.offer[0].price;
  }

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
            <CategoryCard key={idx} category={category} type={"services"} categoryName={getCategoryName(category.category)} precio={getPrice(category)} />
          ))
        ) : (
          <h1>Loading categories...</h1>
        )}
      </div>
    </>
  );
};

export default Search;
