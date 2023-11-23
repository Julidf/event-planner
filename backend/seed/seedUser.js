import User from '../models/user.js';
import { logger } from '../config/logger.js'
import mongoose from 'mongoose';

const userId1 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c633');
const userId2 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c634');
const userId3 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c635');

const userData = [
    {_id: userId1, name: 'User1', surname: 'Test', email: 'test@test.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId2, name: 'User2', surname: 'Admin', email: 'admin@admin.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'user', isEmailVerified: 'true'},
    {_id: userId3, name: 'User3', surname: 'Dev', email: 'dev@dev.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'user', isEmailVerified: 'true'},
];

// Función para insertar los datos
const seedUser = async () => {
    try {
        await User.deleteMany({});
        await User.insertMany(userData);
        logger.info('USUARIOS CARGADOS CON ÉXITO');
    } catch (error) {
        logger.info('Error al insertar usuarios');
        logger.error(error);
    }
  };

export default seedUser; 
