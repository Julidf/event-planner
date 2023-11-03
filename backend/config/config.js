import "dotenv/config";

export const serverPort = process.env.SERVER_PORT;
export const dbName = process.env.DB_NAME;
export const host = process.env.DB_HOST;
export const dialect = process.env.DB_DIALECT;
export const dbPort = process.env.DB_PORT;