import React from 'react'
import "./categoryList.css"
import CategoryCard from '../cards/category-card/CategoryCard'

function CategoryList({ categoryList }) {
  return (
    <div className='category-list-container'>
        <div className='category-list-inner'>
            <div className='category-title'>
                <h1>¿Qué servicios buscás?</h1>
            </div>
            <div className='category-list-cards'>
                {categoryList
                    ? categoryList.map((category, idx) => <CategoryCard key={idx} {...category} />)
                    : <h1>Loading categories...</h1>}
            </div>
        </div>
    </div>
  )
}

export default CategoryList