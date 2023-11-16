import Category from '../models/category.js';
import { logger } from '../config/logger.js'
import mongoose from 'mongoose';

const categoryId1 = new mongoose.Types.ObjectId('655630870f773cd06e37d0ba');
const categoryId2 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bb');
const categoryId3 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bc');
const categoryId4 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bd');
const categoryId5 = new mongoose.Types.ObjectId('655630870f773cd06e37d0be');
const categoryId6 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bf');

//imágenes de Unsplash
const categoryData = [
    { _id: categoryId1, name: 'Música', description: 'Djs, Bandas en vivo, Karaoke', picture: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { _id: categoryId2, name: 'Salones', description: 'Salones de fiestas, conferencias, Quintas ', picture: 'https://images.unsplash.com/photo-1620735692151-26a7e0748429?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { _id: categoryId3, name: 'Fotografía', description: 'Fotógrafo/a, Cabina de fotos, Books', picture: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { _id: categoryId4, name: 'Catering', description: 'Servicio de catering, Lunchs, Tortas', picture: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { _id: categoryId5, name: 'Estética', description: 'Peinados, Maquillaje, Manicuría', picture: 'https://images.unsplash.com/photo-1549236177-77e8271c34b6?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { _id: categoryId6, name: 'Personal', description: 'Bartender, Camarera/o, Seguridad', picture: 'https://images.unsplash.com/photo-1516788875874-c5912cae7b43?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

// Función para insertar los datos
const seedCategory = async () => {
    try {
        await Category.deleteMany({});
        await Category.insertMany(categoryData);
        logger.info('CATEGORIAS CARGADAS CON ÉXITO');
    } catch (error) {
        logger.info('Error al insertar datos de categorías');
        logger.error(error);
    }
  };

export default seedCategory; 
