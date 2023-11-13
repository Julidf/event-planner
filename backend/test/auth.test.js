import request from 'supertest';
import faker from 'faker';
import httpStatus from 'http-status';
import moment from 'moment';
import bcrypt from 'bcryptjs';
import app from '../app.js';
import config from '../config/config.js';
import tokenService from '../services/token.js';
import setupTestDB from './setupTestDb.js';
import Token from '../models/user.js';
import User  from '../models/token.js';
import { tokenTypes } from '../config/tokens.jss';
import { userOne, insertUsers } from './testData/userData.js';

setupTestDB();

describe('Rutas de autentificacion', () => {
  describe('POST /auth/register', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
      };
    });

    test('Deberia retornar 201 y registrar al usuario', async () => {
      const res = await request(app).post('/auth/register').send(newUser).expect(httpStatus.CREATED);

      expect(res.body.user).not.toHaveProperty('password');
      expect(res.body.user).toEqual({
        id: expect.anything(),
        name: newUser.name,
        email: newUser.email,
        role: 'user',
        isEmailVerified: false,
      });

      const dbUser = await User.findById(res.body.user.id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);
      expect(dbUser).toMatchObject({ name: newUser.name, email: newUser.email, role: 'user', isEmailVerified: false });

      expect(res.body.tokens).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });
    });

    test('Deberia retornar 400 Error si el emaail no es valido', async () => {
      newUser.email = 'invalidEmail';

      await request(app).post('/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si email ya esta en uso', async () => {
      await insertUsers([userOne]);
      newUser.email = userOne.email;

      await request(app).post('/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si la password es invalida (Cantidad de caracteres) ', async () => {
      newUser.password = 'passwo1';

      await request(app).post('/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si la password es invalida (Letras y numeros)', async () => {
      newUser.password = 'password';

      await request(app).post('/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);

      newUser.password = '11111111';

      await request(app).post('/auth/register').send(newUser).expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('POST /auth/login', () => {
    test('Deberia retornar 200 y logear al usuario si coinciden las credenciales', async () => {
      await insertUsers([userOne]);
      const loginCredentials = {
        email: userOne.email,
        password: userOne.password,
      };

      const res = await request(app).post('/auth/login').send(loginCredentials).expect(httpStatus.OK);

      expect(res.body.user).toEqual({
        id: expect.anything(),
        name: userOne.name,
        email: userOne.email,
        role: userOne.role,
        isEmailVerified: userOne.isEmailVerified,
      });

      expect(res.body.tokens).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });
    });

    test('Deberia retornar 401 Error si no coinciden las credenciales', async () => {
      const loginCredentials = {
        email: userOne.email,
        password: userOne.password,
      };

      const res = await request(app).post('/auth/login').send(loginCredentials).expect(httpStatus.UNAUTHORIZED);

      expect(res.body).toEqual({ code: httpStatus.UNAUTHORIZED });
    });

    test('Deberia retornar 401 Error si la password es incorrecta', async () => {
      await insertUsers([userOne]);
      const loginCredentials = {
        email: userOne.email,
        password: 'wrongPassword1',
      };

      const res = await request(app).post('/auth/login').send(loginCredentials).expect(httpStatus.UNAUTHORIZED);

      expect(res.body).toEqual({ code: httpStatus.UNAUTHORIZED });
    });
  });

  describe('POST /auth/logout', () => {
    test('Deberia retornar 204 si el refreshToken es valido', async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.refreshExpirationDays, 'days');
      const refreshToken = tokenService.generateToken(userOne._id, expires, tokenTypes.REFRESH);
      await tokenService.saveToken(refreshToken, userOne._id, expires, tokenTypes.REFRESH);

      await request(app).post('/auth/logout').send({ refreshToken }).expect(httpStatus.NO_CONTENT);

      const dbRefreshTokenDoc = await Token.findOne({ token: refreshToken });
      expect(dbRefreshTokenDoc).toBe(null);
    });

    test('Deberia retornar 400 Error si el refreshToken no es enviado', async () => {
      await request(app).post('/auth/logout').send().expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 404 Error si el refreshToken no existe', async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.refreshExpirationDays, 'days');
      const refreshToken = tokenService.generateToken(userOne._id, expires, tokenTypes.REFRESH);

      await request(app).post('/auth/logout').send({ refreshToken }).expect(httpStatus.NOT_FOUND);
    });
  });

  describe('POST /auth/refresh-tokens', () => {
    test('Deberia retornar 200 y deberia devolver un nuevo set de tokens', async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.refreshExpirationDays, 'days');
      const refreshToken = tokenService.generateToken(userOne._id, expires, tokenTypes.REFRESH);
      await tokenService.saveToken(refreshToken, userOne._id, expires, tokenTypes.REFRESH);

      const res = await request(app).post('/auth/refresh-tokens').send({ refreshToken }).expect(httpStatus.OK);

      expect(res.body).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });

      const dbRefreshTokenDoc = await Token.findOne({ token: res.body.refresh.token });
      expect(dbRefreshTokenDoc).toMatchObject({ type: tokenTypes.REFRESH, user: userOne._id, blacklisted: false });

      const dbRefreshTokenCount = await Token.countDocuments();
      expect(dbRefreshTokenCount).toBe(1);
    });

    test('Deberia retornar 400 Error si el refreshToken no es enviado', async () => {
      await request(app).post('/auth/refresh-tokens').send().expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 401 Error si el refreshToken no existe', async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.refreshExpirationDays, 'days');
      const refreshToken = tokenService.generateToken(userOne._id, expires, tokenTypes.REFRESH);

      await request(app).post('/auth/refresh-tokens').send({ refreshToken }).expect(httpStatus.UNAUTHORIZED);
    });

    test('Deberia retornar 401 Error si el refreshToken expiro', async () => {
      await insertUsers([userOne]);
      const expires = moment().subtract(1, 'minutes');
      const refreshToken = tokenService.generateToken(userOne._id, expires);
      await tokenService.saveToken(refreshToken, userOne._id, expires, tokenTypes.REFRESH);

      await request(app).post('/auth/refresh-tokens').send({ refreshToken }).expect(httpStatus.UNAUTHORIZED);
    });

    test('Deberia retornar 401 Error si no se encuentra el usuario', async () => {
      const expires = moment().add(config.jwt.refreshExpirationDays, 'days');
      const refreshToken = tokenService.generateToken(userOne._id, expires, tokenTypes.REFRESH);
      await tokenService.saveToken(refreshToken, userOne._id, expires, tokenTypes.REFRESH);

      await request(app).post('/auth/refresh-tokens').send({ refreshToken }).expect(httpStatus.UNAUTHORIZED);
    });
  });

  describe('POST /auth/reset-password', () => {
    test('Deberia retornar 204 y resetear la password', async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes');
      const resetPasswordToken = tokenService.generateToken(userOne._id, expires, tokenTypes.RESET_PASSWORD);
      await tokenService.saveToken(resetPasswordToken, userOne._id, expires, tokenTypes.RESET_PASSWORD);

      await request(app)
        .post('/auth/reset-password')
        .query({ token: resetPasswordToken })
        .send({ password: 'password2' })
        .expect(httpStatus.NO_CONTENT);

      const dbUser = await User.findById(userOne._id);
      const isPasswordMatch = await bcrypt.compare('password2', dbUser.password);
      expect(isPasswordMatch).toBe(true);

      const dbResetPasswordTokenCount = await Token.countDocuments({ user: userOne._id, type: tokenTypes.RESET_PASSWORD });
      expect(dbResetPasswordTokenCount).toBe(0);
    });

    test('Deberia retornar 400 si el resetToken no es enviado', async () => {
      await insertUsers([userOne]);

      await request(app).post('/auth/reset-password').send({ password: 'password2' }).expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 401 Error si el resetToken expiro', async () => {
      await insertUsers([userOne]);
      const expires = moment().subtract(1, 'minutes');
      const resetPasswordToken = tokenService.generateToken(userOne._id, expires, tokenTypes.RESET_PASSWORD);
      await tokenService.saveToken(resetPasswordToken, userOne._id, expires, tokenTypes.RESET_PASSWORD);

      await request(app)
        .post('/auth/reset-password')
        .query({ token: resetPasswordToken })
        .send({ password: 'password2' })
        .expect(httpStatus.UNAUTHORIZED);
    });

    test('Deberia retornar 400 Error si falta la password o es invalida', async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes');
      const resetPasswordToken = tokenService.generateToken(userOne._id, expires, tokenTypes.RESET_PASSWORD);
      await tokenService.saveToken(resetPasswordToken, userOne._id, expires, tokenTypes.RESET_PASSWORD);

      await request(app).post('/auth/reset-password').query({ token: resetPasswordToken }).expect(httpStatus.BAD_REQUEST);

      await request(app)
        .post('/auth/reset-password')
        .query({ token: resetPasswordToken })
        .send({ password: 'pass' })
        .expect(httpStatus.BAD_REQUEST);

      await request(app)
        .post('/auth/reset-password')
        .query({ token: resetPasswordToken })
        .send({ password: 'password' })
        .expect(httpStatus.BAD_REQUEST);

      await request(app)
        .post('/auth/reset-password')
        .query({ token: resetPasswordToken })
        .send({ password: '11111111' })
        .expect(httpStatus.BAD_REQUEST);
    });
  });
});
