const express = require('express');
const router = express.Router();

const storyRoutes = (db) => {

  // GET /story
  router.get('/', (req, res) => {
    db.query('SELECT * FROM stories JOIN writers ON writers.id = writer_id;')
      .then(response => {
        res.json(response.rows);
        // res.render('story')
      })
      .catch(err => console.log('View stories error', err.message))
  });

  // GET /story/:id
  router.get('/:id', (req,res) => {
    db.query('SELECT * FROM stories WHERE id = $1;', [req.params.id])
      .then(response => {
        // res.json(response.rows[0]);
        templateVar = {
          storyObj: response.rows
        }
        res.render('story', templateVar);
      })
      .catch(err => console.log('View specific story error', err.message))
  });

  // PUT /story/:id
  router.put('/:id', (req,res) => {
    db.query('UPDATE stories SET story = $1  WHERE id = $2', [req.body.name, req.params.id])
      .then(response => {
        res.json({name:req.body.name, id:req.params.id});
      })
      .catch(err => console.log('Edit story error', err.message));
  });

  // POST /story/:id
  router.post('/', (req, res) => {
    db.query(`INSERT INTO stories (story) VALUES ($1)`, [req.body.story])
      .then(response => {
        res.json({name:req.body.story})
      })
      .catch(err => console.log('Create story error', err.message));
  })

  return router;
};

module.exports = storyRoutes;
