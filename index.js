const express = require('express');

const server = express();

const port = 5000;
server.listen(port, () => console.log(`Server is up and running on localhost:${port}`));
