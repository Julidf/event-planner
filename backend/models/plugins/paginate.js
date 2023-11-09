const paginate = (schema) => {
    /**
     * @typedef {Object} QueryResult
     * @property {Document[]} results - Resultados encontrados
     * @property {number} page - Pagina actual
     * @property {number} limit - Resultados Maximos por pagina
     * @property {number} totalPages - Numero total de paginas
     * @property {number} totalResults - Numero total de resultados
     */
    /**
     * Query for documents with pagination
     * @param {Object} [filter] - Filtros Mongo
     * @param {Object} [options] - Opciones de Query
     * @param {string} [options.sortBy] - Ordenamiento utilizando: sortField:(desc|asc). Multiples criterios deberan ser separados por coma (,)
     * @param {string} [options.populate] - Rellenar Campos. Herarquia de campos deberan ser serparados por punto (.). Multiples criterios deberan ser separados por coma (,)
     * @param {number} [options.limit] - Resultados Maximos por pagina (default = 10)
     * @param {number} [options.page] - Pagina actual (default = 1)
     * @returns {Promise<QueryResult>}
     */
    schema.statics.paginate = async function (filter, options) {
      let sort = '';
      if (options.sortBy) {
        const sortingCriteria = [];
        options.sortBy.split(',').forEach((sortOption) => {
          const [key, order] = sortOption.split(':');
          sortingCriteria.push((order === 'desc' ? '-' : '') + key);
        });
        sort = sortingCriteria.join(' ');
      } else {
        sort = 'createdAt';
      }
  
      const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
      const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
      const skip = (page - 1) * limit;
  
      const countPromise = this.countDocuments(filter).exec();
      let docsPromise = this.find(filter).sort(sort).skip(skip).limit(limit);
  
      if (options.populate) {
        options.populate.split(',').forEach((populateOption) => {
          docsPromise = docsPromise.populate(
            populateOption
              .split('.')
              .reverse()
              .reduce((a, b) => ({ path: b, populate: a }))
          );
        });
      }
  
      docsPromise = docsPromise.exec();
  
      return Promise.all([countPromise, docsPromise]).then((values) => {
        const [totalResults, results] = values;
        const totalPages = Math.ceil(totalResults / limit);
        const result = {
          results,
          page,
          limit,
          totalPages,
          totalResults,
        };
        return Promise.resolve(result);
      });
    };
};

export { paginate };