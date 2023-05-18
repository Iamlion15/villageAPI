import swaggerJDOC from 'swagger-jsdoc';
import userRoutedocs from './userr.docs';

const options = {
    swaggerDefinition:
    {
        openapi: "3.0.0",
        info: {
            title: "MY VILLAGE API",
            description: "all backend end point of my village",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "local development server"
            }
        ],
        tags:[
            {name: 'User', description: 'User Routes'},
            {name: 'authentication', description: 'authentication Routes'},
        ],
        paths:{...userRoutedocs}
    },
    apis: ['./villageAPI/*.js'],
}

const swaggerDocs = swaggerJDOC(options);
export default swaggerDocs;