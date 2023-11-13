import mongoose from 'mongoose';
import { dbPort, dbName, host, dialect } from '../config/config.js'

const setupTestDB = () => {
  beforeAll(async () => {
    await await mongoose.connect(`${dialect}://${host}:${dbPort}/${dbName}`);
  });

  beforeEach(async () => {
    await Promise.all(Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany()));
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

export {setupTestDB};
