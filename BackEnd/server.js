// require HTTP for the creation of the server
const http = require('http')
const app = require('./app')
// using port in local host by geting PORT from enviornmental variable
const port = process.env.PORT || 3000;

const server = http.createServer(app)

server.listen(port ,() =>{
    console.log(`Server is running on port ${port}`);
});