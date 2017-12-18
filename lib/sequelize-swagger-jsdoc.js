const { DataTypes } = require('sequelize');

const sequelizeOpenApiMapping = {
  string: DataTypes.STRING,
}

function generate(definitionName, schema) {
  let template = `
/**
 * @swagger
 *  definitions:
 *    ${definitionName}:
 *      type: object
 *      properties:
`;

  Object.keys(schema).forEach(key => {
    template +=
` *        ${key}:
 *          type: ${_guessType(schema[key].type)}\n`
  });

  template += ' */';

  return template;
}

function _guessType(type) {
  switch(type) {
    case DataTypes.STRING: return 'string';
    case DataTypes.INTEGER: return 'integer';
    case DataTypes.DATE: return `string\n *          format: $date-time`;
    case DataTypes.BOOLEAN: return 'boolean';
    case DataTypes.REAL: return 'number';
    case DataTypes.DOUBLE: return 'number';
  }
};

module.exports = {
  generate,
}