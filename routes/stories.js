const { response } = require('express');
const express = require('express');
const router = express.Router();

const storiesRoutes = (db) => {

  // GET /stories
  router.get('/', (req, res) => {
    db.query('SELECT * FROM users;')
      .then(response => {
        res.json(response.rows);
      })
      .catch(err => console.log('View stories error', err.message))
  });

  // GET /stories/:id
  router.get('/:id', (req,res) => {
    db.query('SELECT * FROM users WHERE id = $1;', [req.params.id])
      .then(response => {
        res.json(response.rows[0]);
      })
      .catch(err => console.log('View specific story error', err.message))
  });

  // PUT /stories/:id
  router.put('/:id', (req,res) => {
    db.query('UPDATE users SET name = $1  WHERE id = $2', [req.body.name, req.params.id])
      .then(response => {
        console.log(response.rows);
        res.end();
      })
  });

  // POST /stories/:id
  router.post('/', (req, res) => {
    db.query(`INSERT INTO users (name) VALUES ($1)`, [req.body.name])
      .then(response => {
        res.json({name:req.body.name})
      })
  })

  return router;
};

module.exports = storiesRoutes;
