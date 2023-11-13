import request from 'supertest';
import faker from 'faker';
import httpStatus from 'http-status';
import {app} from '../app.js';
import {setupTestDB} from './setupTestDb.js';
import User from '../models/user.js';
import { userOne, userTwo, admin, insertUsers } from '../testData/userData.js';
import { userOneAccessToken, adminAccessToken } from '../testData/tokenData.js';

setupTestDB();

describe('Rutas de usuario', () => {
  describe('POST /users', () => {
    let newUser;

    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
        role: 'user',
      };
    });

    test('Deberia retornar 201 y crear el usuario correctamente', async () => {
      await insertUsers([admin]);

      const res = await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.CREATED);

      expect(res.body).not.toHaveProperty('password');
      expect(res.body).toEqual({
        id: expect.anything(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        isEmailVerified: false,
      });

      const dbUser = await User.findById(res.body.id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);
      expect(dbUser).toMatchObject({ name: newUser.name, email: newUser.email, role: newUser.role, isEmailVerified: false });
    });

    test('Deberia crear un admin correctamente', async () => {
      await insertUsers([admin]);
      newUser.role = 'admin';

      const res = await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.CREATED);

      expect(res.body.role).toBe('admin');

      const dbUser = await User.findById(res.body.id);
      expect(dbUser.role).toBe('admin');
    });

    test('Deberia retornar 401 Error Si falta el accessToken', async () => {
      await request(app).post('/users').send(newUser).expect(httpStatus.UNAUTHORIZED);
    });

    test('Deberia retornar 400 Error si el email es invalido', async () => {
      await insertUsers([admin]);
      newUser.email = 'invalidEmail';

      await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si el email esta en uso', async () => {
      await insertUsers([admin, userOne]);
      newUser.email = userOne.email;

      await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si la password es invalida (Cantidad de caracteres)', async () => {
      await insertUsers([admin]);
      newUser.password = 'passwo1';

      await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si la password es invalida (Letras y numeros)', async () => {
      await insertUsers([admin]);
      newUser.password = 'password';

      await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);

      newUser.password = '1111111';

      await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('Deberia retornar 400 Error si el rol es invalido', async () => {
      await insertUsers([admin]);
      newUser.role = 'invalido';

      await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('GET /users', () => {
    test('Deberia retornar 200 y aplicar los filtros por defecto', async () => {
      await insertUsers([userOne, userTwo, admin]);

      const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send()
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 3,
      });
      expect(res.body.results).toHaveLength(3);
      expect(res.body.results[0]).toEqual({
        id: userOne._id.toHexString(),
        name: userOne.name,
        email: userOne.email,
        role: userOne.role,
        isEmailVerified: userOne.isEmailVerified,
      });
    });

    test('Deberia retornar 401 si falta el accessToken', async () => {
      await insertUsers([userOne, userTwo, admin]);

      await request(app).get('/users').send().expect(httpStatus.UNAUTHORIZED);
    });

    test('Deberia aplicar el filtro sobre el nombre correctamente', async () => {
      await insertUsers([userOne, userTwo, admin]);

      const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .query({ name: userOne.name })
        .send()
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 1,
      });
      expect(res.body.results).toHaveLength(1);
      expect(res.body.results[0].id).toBe(userOne._id.toHexString());
    });
  });
    

  describe('GET /users/:userId', () => {
    test('Deberia retornar 200 y el objeto del usuario', async () => {
      await insertUsers([userOne]);

      const res = await request(app)
        .get(`/users/${userOne._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send()
        .expect(httpStatus.OK);

      expect(res.body).not.toHaveProperty('password');
      expect(res.body).toEqual({
        id: userOne._id.toHexString(),
        email: userOne.email,
        name: userOne.name,
        role: userOne.role,
        isEmailVerified: userOne.isEmailVerified,
      });
    });

    test('Deberia retornar 403 Error si se intenta acceder a otro usuario con su token', async () => {
      await insertUsers([userOne, userTwo]);

      await request(app)
        .get(`/users/${userTwo._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send()
        .expect(httpStatus.FORBIDDEN);
    });

    test('Deberia retornar 404 Error si no encuentra al usuario', async () => {
      await insertUsers([admin]);

      await request(app)
        .get(`/users/${userOne._id}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send()
        .expect(httpStatus.NOT_FOUND);
    });
  });

  describe('DELETE /users/:userId', () => {
    test('Deberia retornar 204 si el objeto es correcto', async () => {
      await insertUsers([userOne]);

      await request(app)
        .delete(`/users/${userOne._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send()
        .expect(httpStatus.NO_CONTENT);

      const dbUser = await User.findById(userOne._id);
      expect(dbUser).toBeNull();
    });

    test('Deberia retornar 403 Error si un usuario intenta eliminar a otro usuario', async () => {
      await insertUsers([userOne, userTwo]);

      await request(app)
        .delete(`/users/${userTwo._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send()
        .expect(httpStatus.FORBIDDEN);
    });
  });

  describe('PATCH /users/:userId', () => {
    test('Deberia retornar 200 y actualizar el usuario correctamente', async () => {
      await insertUsers([userOne]);
      const updateBody = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'newPassword1',
      };

      const res = await request(app)
        .patch(`/users/${userOne._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(updateBody)
        .expect(httpStatus.OK);

      expect(res.body).not.toHaveProperty('password');
      expect(res.body).toEqual({
        id: userOne._id.toHexString(),
        name: updateBody.name,
        email: updateBody.email,
        role: 'user',
        isEmailVerified: false,
      });

      const dbUser = await User.findById(userOne._id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(updateBody.password);
      expect(dbUser).toMatchObject({ name: updateBody.name, email: updateBody.email, role: 'user' });
    });

    test('Deberia retornar 403 si el usuario intenta actualizar datos de otro usuario', async () => {
      await insertUsers([userOne, userTwo]);
      const updateBody = { name: faker.name.findName() };

      await request(app)
        .patch(`/users/${userTwo._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(updateBody)
        .expect(httpStatus.FORBIDDEN);
    });

    test('Deberia retornar 400 si el email se encuentra en uso', async () => {
      await insertUsers([userOne, userTwo]);
      const updateBody = { email: userTwo.email };

      await request(app)
        .patch(`/users/${userOne._id}`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(updateBody)
        .expect(httpStatus.BAD_REQUEST);
    });
  });
});