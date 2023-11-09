import "dotenv/config";
import {randomBytes} from 'node:crypto';

export const serverPort = process.env.SERVER_PORT;
export const dbName = process.env.DB_NAME;
export const host = process.env.DB_HOST;
export const dialect = process.env.DB_DIALECT;
export const dbPort = process.env.DB_PORT;
export const nodeEnv = process.env.NODE_ENV;
export const jwtSecret = process.env.JWT_SECRET == "" ? randomBytes(16).toString('base64') : process.env.JWT_SECRET;
export const jwtAccessExpirationMinutes = process.env.JWT_ACCESS_EXPIRATION_MINUTES == 0 ? 30 : process.env.JWT_ACCESS_EXPIRATION_MINUTES;
export const jwtRefreshExpirationDays = process.env.JWT_REFRESH_EXPIRATION_DAYS == 0 ? 30 : process.env.JWT_REFRESH_EXPIRATION_DAYS;
export const jwtResetPasswordExpirationMinutes = process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES == "" ? 10 : process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES;
export const jwtVerifyEmailExpirationMinutes = process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES == "" ? 10 : process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES;

export const frontUrl = process.env.FRONT_URL;

export const smtpHost = process.env.SMTP_HOST;
export const smtpPort = process.env.SMTP_PORT;
export const smtpUser = process.env.SMTP_USERNAME;
export const smtpPass = process.env.SMTP_PASSWORD;
export const smtpFrom = process.env.EMAIL_FROM;

export const isProd = () => {
    return nodeEnv=="production" || nodeEnv.toUpperCase()=="PRODUCTION";
};
export const isDev = () => {
    return nodeEnv=="development" || nodeEnv.toUpperCase()=="DEVELOPMENT";
};
export const isTest = () => {
    return nodeEnv=="test" || nodeEnv.toUpperCase()=="TEST";
};