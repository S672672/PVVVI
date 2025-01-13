const http = require('http');
const app = require('./app');
const { port } = require('./config/dotenv');


const server = http.createServer(app);


server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});