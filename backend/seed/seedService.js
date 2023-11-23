import Service from '../models/service.js';
import { logger } from '../config/logger.js'
import faker from 'faker';
import mongoose from 'mongoose';

const userId1 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c633');
const categoryId1 = new mongoose.Types.ObjectId('655630870f773cd06e37d0ba');
const categoryId2 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bb');
const categoryId3 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bc');
const categoryId4 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bd');
//foto
const userId4 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c636');
const userId5 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c637');
//musica
const userId6 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c638');
const userId7 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c639');
//salon
const userId8 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c640');
const userId9 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c641');

const serviceData = [
    {name: 'Salón Tortoni', description: 'Salón tradicional y bar histórico', owner: userId8, category: categoryId2, premium: false, priceType: 'special',  offer: [{description: 'Sin recepcion', price: 50000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6KIewjfaTW_ioXoScwJy4ialHPBuuT3MDu86OxX26NrWeMDoLp-FVW-TJKVW6sAxpW8&usqp=CAU',expires: '02/02/2025', reviews: [], rank: 1 },
    {name: 'Salon Roma', description: 'Salon para fiestas infantiles', owner: userId9, category: categoryId2, premium: false, priceType: 'special',  offer: [{description: 'Sin Luminaria', price: 100000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://i.pinimg.com/originals/9e/a2/6b/9ea26b0f6e27497e6cda4004305e9621.jpg',expires: '02/02/2025', reviews: [], rank: 2 },
    {name: 'Catering Delicias', description: 'Catering profesional, incluye servicio a mesa', owner: userId1, category: categoryId4, premium: false, priceType: 'perPerson',  offer: [{description: 'Tradicional Argentina', price: 10000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://cdn0.casamientos.com.ar/vendor/6260/3_2/960/jpg/delicias-catering-15_7_176260-167577066285113.jpeg', expires: '02/02/2025', reviews: [], rank: 1 },
    {name: 'Catering Roma', description: 'Catering para fiestas infantiles', owner: userId1, category: categoryId4, premium: false, priceType: 'perPerson',  offer: [{description: 'Tradicional Infantil', price: 10000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvoszm8vREvHt51DGu8V76JLzeuj3Q-SS1d5iOBSSlkZJProAwg_pK6eK3d9iSw-m8MY&usqp=CAU', expires: '02/02/2025', reviews: [], rank: 2 },
    {name: 'Dj Bodas', description: 'Musica profesional mezclada en vivo, contamos con multiples djs', owner: userId6, category: categoryId1, premium: false, priceType: 'perStaff',  offer: [{description: 'Amplia gama musical, nos ajustamos a los generos que nos soliciten', price: 30000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://www.onfiesta.com/wp-content/uploads/2023/01/Dj-para-bodas-en-La-Rioja.jpg', expires: '02/02/2025', reviews: [], rank: 1 },
    {name: 'Banda Totora', description: 'Banda para musicalizar tu evento, contamos con amplia gama de precios', owner: userId7, category: categoryId1, premium: false, priceType: 'special',  offer: [{description: 'Segmento de baile de 2 horas', price: 50000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://cdn0.casamientos.com.ar/article-vendor/3069/3_2/960/jpeg/photo5049043088391121341_7_143069-164873492727336.jpeg', expires: '02/02/2025', reviews: [], rank: 2 },
    {name: 'Fotografía Profesional HD', description: 'Servicio de fotografía de alta calidad para capturar los momentos más especiales de tu evento. Contamos con fotógrafos expertos y equipo de última generación.', owner: userId4, category: categoryId3, premium: false, priceType: 'perHour',  offer: [{description: 'Cobertura completa del evento', price: 15000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://www.dzoom.org.es/wp-content/uploads/2015/07/consejos-fotos-eventos-bodas-celebraciones-grupo-personas-evento-734x489.jpg', expires: '02/02/2025', reviews: [], rank: 1 },
    {name: 'Estudio Fotográfico Éclat', description: 'Ofrecemos servicios de fotografía artística y elegante para eventos. Nuestro equipo creativo se especializa en capturar la esencia única de cada ocasión.', owner: userId5, category: categoryId3, premium: false, priceType: 'special',  offer: [{description: 'Sesión fotográfica pre-evento y post-evento', price: 25000}], country: 'Argentina', city: 'Buenos Aires', picture: 'https://i.ytimg.com/vi/tnsnyjfeek4/maxresdefault.jpg', expires: '02/02/2025', reviews: [], rank: 2 },
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
