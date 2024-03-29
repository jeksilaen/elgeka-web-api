'use strict';

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quote.init({
    author_name: {
      type: DataTypes.STRING,
      validate: {
        isString(value) {
          if (typeof value !== 'string') {
            throw new Error('Author Name must be a string');
          }
        },
      },
    },
    image_url: DataTypes.STRING,
    quote: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Quote',
  });

  sequelizePaginate.paginate(Quote);

  return Quote;
};