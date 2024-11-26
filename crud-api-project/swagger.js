const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users API', // Fixed typo from "tittle" to "title"
    description: 'Users API documentation',
  },
  host: 'localhost:3000', // Matches your server's port
  schemes: ['http', 'https'], // Supports both schemes
};

const outputFile = './swagger-output.json'; // File to generate documentation
const endpointsFiles = ['server.js']; // Entry file with all routes

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // Start the server after Swagger docs are generated
  require('./server.js');
});
