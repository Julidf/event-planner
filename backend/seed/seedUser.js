import User from '../models/user.js';
import { logger } from '../config/logger.js'
import mongoose from 'mongoose';

const userId1 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c633');
const userId2 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c634');
const userId3 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c635');
//foto
const userId4 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c636');
const userId5 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c637');
//musica
const userId6 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c638');
const userId7 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c639');
//salon
const userId8 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c640');
const userId9 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c641');

const userData = [
    {_id: userId1, name: 'User1', surname: 'Test', email: 'test@test.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId2, name: 'User2', surname: 'Admin', email: 'admin@admin.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'user', isEmailVerified: 'true'},
    {_id: userId3, name: 'User3', surname: 'Dev', email: 'dev@dev.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'user', isEmailVerified: 'true'},
    {_id: userId4, name: 'fotografia', surname: 'eclat', email: 'eclat@gmail.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId5, name: 'carlitos', surname: 'pepe', email: 'carlitospepe@gmail.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId6, name: 'djs', surname: 'parati', email: 'musicadjs@gmail.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId7, name: 'banda', surname: 'totora', email: 'totorabanda@gmail.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId8, name: 'salon infantil', surname: 'rivadavia', email: 'salonInfantil@gmail.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
    {_id: userId9, name: 'Roma', surname: 'lugar', email: 'romaeventos@gmail.com', password: 'abcd1234', location: 'Buenos Aires', phoneNumber: '1157552369', role: 'provider', isEmailVerified: 'true'},
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
