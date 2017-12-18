var sequelize = require('sequelize');
const { DataTypes } = sequelize;
const fs = require('fs');

const sequelizeToJsdocSwagger = require('./lib/sequelize-swagger-jsdoc');

const Schema =  {
};

const doc = sequelizeToJsdocSwagger.generate('Name', Schema);
fs.writeFileSync('./jsdoc', doc)