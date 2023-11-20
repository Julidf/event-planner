import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./category.css"
import Search from '../../components/search/Search'
import { useParams } from 'react-router';
import Footer from '../../components/footer/Footer';

const Category = () => {

  let { param } = useParams();
  
  return (
    <div>
      <Navbar />
      <Search param={param} />
      <Footer />
    </div>
  );
};

export default Category;
