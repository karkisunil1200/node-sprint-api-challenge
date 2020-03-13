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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log('This is the id', id);

  Hubs.get(id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(400).json({message: 'The specific ID does not exist'});
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({message: 'The information could not be retrieved', error: error.message});
    });
});

router.post('/post', (req, res) => {
  const project = req.body;
  console.log('This is the body', project);

  Hubs.insert(project)
    .then(hubs => {
      res.status(201).json(hubs);
    })
    .catch(error => {
      res.status(500).json({error: 'There was an error while saving the post to the database'});
    });
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Hubs.update(id, changes)
    .then(hub => {
      res.status(200).json(hub);
    })
    .catch(error => {
      res.status(500).json({message: 'There was an error modifying the data '});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  Hubs.remove(id)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      res.status(500).json({message: 'There was an error deleting the data'});
    });
});

module.exports = router;
