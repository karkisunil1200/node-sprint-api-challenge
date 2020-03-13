const express = require('express');

const Hubs = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  const {id} = req.params;
  console.log(id);

  Hubs.get(id)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      res.status(500).json({message: 'Data could not be located', error: error.message});
    });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  console.log(id);

  Hubs.get(id)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      res.status(500).json({message: 'Data could not be located', error: error.message});
    });
});

router.post('/', (req, res) => {
  const data = req.body;

  Hubs.insert(data)
    .then(hubs => {
      res.status(201).json(hubs);
    })
    .catch(error => {
      res.status(500).json({message: 'Data could not be posted', error: error.message});
    });
});

module.exports = router;
