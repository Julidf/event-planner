import React from 'react'
import "./serviceList.css"
import ServiceCard from '../cards/service-card/ServiceCard'

function ServiceList({ servicesList }) {
  return (
    <div className='services-list-container'>
        <div className='services-list-inner'>
            <div className='services-title'>
                <h1>¿Qué servicios buscás?</h1>
            </div>
            <div className='services-list-cards'>
                {servicesList
                    ? servicesList.map((service, idx) => <ServiceCard key={idx} {...service} />)
                    : <h1>Loading services...</h1>}
            </div>
        </div>
    </div>
  )
}

export default ServiceList