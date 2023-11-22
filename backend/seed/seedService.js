import Service from '../models/service.js';
import { logger } from '../config/logger.js'
import faker from 'faker';
import mongoose from 'mongoose';

const userId1 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c633');
const categoryId2 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bb');
const categoryId4 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bd');


const serviceData = [
    {name: 'Salón Tortoni', description: 'Salón tradicional y bar histórico', owner: userId1, category: categoryId2, premium: false, priceType: 'special',  offer: [{description: 'Oferta 1', price: 100}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6KIewjfaTW_ioXoScwJy4ialHPBuuT3MDu86OxX26NrWeMDoLp-FVW-TJKVW6sAxpW8&usqp=CAU',expires: '02/02/2025', reviews: [], rank: 1 },
    {name: 'Catering Roma', description: 'Catering para fiestas infantiles', owner: userId1, category: categoryId4, premium: false, priceType: 'special',  offer: [{description: 'Oferta 2', price: 200}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvoszm8vREvHt51DGu8V76JLzeuj3Q-SS1d5iOBSSlkZJProAwg_pK6eK3d9iSw-m8MY&usqp=CAU', expires: '02/02/2025', reviews: [], rank: 1 },
];

// Función para insertar los datos
const seedService = async () => {
    try {
        await Service.deleteMany({});
        await Service.insertMany(serviceData);
        logger.info('SERVICIOS CARGADOS CON ÉXITO');
    } catch (error) {
        logger.info('Error al insertar datos de servicios');
        logger.error(error);
    }
  };

export default seedService; 
