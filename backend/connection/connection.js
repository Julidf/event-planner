import { Sequelize } from "sequelize";

import { dbname, username, password, host, dialect, port } from '../config/config.js'

const connection = new Sequelize(dbname, username, password, {
    host,
    dialect,
    port,
});

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default connection