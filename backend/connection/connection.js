import mongoose from 'mongoose';
import { dbPort, dbName, host, dialect } from '../config/config.js'

async function connectToDatabase() {
    try {
        //Use this line if your database has authentication enabled: await mongoose.connect('mongodb://user:password@127.0.0.1:27017/dbname');
        await mongoose.connect(`${dialect}://${host}:${dbPort}/${dbName}`);
        console.log(`DB CONNECTION ON ${dialect}://${host}:${dbPort}/${dbName}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

export { connectToDatabase };