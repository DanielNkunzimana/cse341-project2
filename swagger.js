const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    tittle: 'Users Api',
    description: 'Users Api'
  },
  host: 'cse341-project2-3jfs.onrender.com',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);