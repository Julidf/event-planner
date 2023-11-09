import mongoose from 'mongoose';
import { dbPort, dbName, host, dialect, isDev, isTest } from '../config/config.js'
import { logger } from '../config/logger.js'
import seedCategory from '../seed/seedCategory.js';

const connectDB = async () => {
    try {
        //Use this line if your database has authentication enabled: await mongoose.connect('mongodb://user:password@127.0.0.1:27017/dbname');
        const conn = await mongoose.connect(`${dialect}://${host}:${dbPort}/${dbName}`).then(async () => {
            if(isDev() || isTest()){
                logger.info(`Seeding`);
                // Ejecuta el seeding
                await seedCategory();  
            }
        });
        logger.debug(`DB CONNECTION ON ${dialect}://${host}:${dbPort}/${dbName}`);
    } catch (err) {
        logger.info('MongoDB connection error');
        logger.error(err);
        process.exit(1);
    }
}

export default connectDB;