const express = require('express');
const projectRouter = require('./projectRouter');

const router = express.Router();

router.use('/project', projectRouter);

module.exports = router;
