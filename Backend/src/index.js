const http = require('http');
const app = require('./app');
const { PORT } = require('./config/dotenv');


const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});