import Service from '../models/service.js';
import { logger } from '../config/logger.js'
import faker from 'faker';
import mongoose from 'mongoose';

const userId1 = new mongoose.Types.ObjectId('5fc29be19f808d3a40c7c633');
const categoryId4 = new mongoose.Types.ObjectId('655630870f773cd06e37d0bd');

// Función para generar servicios ficticios
const generateServices = () => {
  const services = [];
  for (let i = 0; i < 10; i++) {
    const service = new Service({
      title: faker.lorem.words(3),
      description: faker.lorem.paragraph(),
      owner: userId1, 
      category: categoryId4, 
      premium: faker.random.boolean(),
      offer: [
        {
          description: faker.lorem.words(5),
          price: faker.random.number({ min: 10, max: 100 }),
        },
        {
          description: faker.lorem.words(5),
          price: faker.random.number({ min: 10, max: 100 }),
        },
      ],
      country: faker.address.country(),
      city: faker.address.city(),
      picture: faker.image.imageUrl(),
      expires: faker.date.future(),
      reviews: [],
      rank: faker.random.number({ min: 0, max: 5 }),
    });
    services.push(service);
  }
  return services;
};

const servicesToInsert = generateServices();

// Función para insertar los datos
const seedService = async () => {
    try {
        await Service.deleteMany({});
        await Service.insertMany(servicesToInsert);
        logger.info('SERVICIOS CARGADOS CON ÉXITO');
    } catch (error) {
        logger.info('Error al insertar datos de servicios');
        logger.error(error);
    }
  };

export default seedService; 
