const express = require('express');

const Hubs = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  Hubs.get()
    .then(hubs => {
      if (hubs) {
        res.status(200).json(hubs);
      } else {
        res.status(400).json({message: 'Data not found'});
      }
    })
    .catch(error => {
      res.status(500).json({message: 'Invalid credentials'});
    });
});

module.exports = router;
