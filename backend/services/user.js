import httpStatus from 'http-status';
import User from '../models/user.js';
import {ApiError} from '../utils/ApiError.js';

/**
 * Crear usuario
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email en uso');
  }
  return User.create(userBody);
};

/**
 * Query de usuarios
 * @param {Object} filter - Filtro Mongo 
 * @param {Object} options - Opciones de Query
 * @param {string} [options.sortBy] - Opciones de ordenamiento: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximo de resultados por pagina (default = 10)
 * @param {number} [options.page] - Pagina actual (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Buscar usuario por id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Buscar usuario por email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Actualizar usuario por id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Usuario no encontrado');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email en uso');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Borrado de usuario por id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Usuario no encontrado');
  }
  await user.remove();
  return user;
};
export {createUser, queryUsers, getUserById, getUserByEmail, updateUserById, deleteUserById};