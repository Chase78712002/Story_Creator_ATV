const express = require('express');
const router = express.Router();

const storyRoutes = (db) => {

  // GET /story
  router.get('/', (req, res) => {
    db.query('SELECT * FROM stories JOIN writers ON writers.id = writer_id;')
      .then(response => {
        res.json(response.rows);
      })
      .catch(err => console.log('View stories error', err.message))
  });

  // GET /story/:id
  router.get('/:id', (req,res) => {
    console.log("Session obj: ", req.session.user_id);
    db.query('SELECT * FROM stories JOIN writers ON writers.id = writer_id JOIN contributions ON stories.id = story_id WHERE stories.writer_id = $1;', [req.params.id])
      .then(response => {
        const templateVars = {
          storyObj: response.rows[0],
          contributionArr: response.rows,
          sessionId: req.session.user_id
        };
        res.render("story", templateVars);
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
        res.json({story:req.body.story})
      })
      .catch(err => console.log('Create story error', err.message));
  })

  return router;
};

module.exports = storyRoutes;
