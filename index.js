const express = require('express');
const apiRouter = require('./api/api-router');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to your Homepage</h2>`);
});

server.use(express.json());

server.use('/api', apiRouter);

const port = 5000;
server.listen(port, () => console.log(`Server is up and running on localhost:${port}`));
