import Service from '../models/service.js';

const servicesData = [
    { name: 'Servicio 1', price: 100 },
    { name: 'Servicio 2', price: 150 },
    { name: 'Servicio 3', price: 200 },
];

// Función para insertar los datos
const seedServices = async () => {
    try {
        await Service.deleteMany({});
        console.log('Servicios existentes eliminados con éxito.');
        await Service.insertMany(servicesData);
        console.log('Datos de servicios insertados con éxito');
    } catch (error) {
        console.error('Error al insertar datos de servicios:', error);
    }
  };
  
export default seedServices;
