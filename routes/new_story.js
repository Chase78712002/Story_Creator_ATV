const express = require('express');
const router = express.Router();

const newStoryRoutes = (db) => {
  // GET /new_story
  router.get("/", (req, res) => {
    res.render("new_story");
  });

  router.post("/create", (req, res) => {
    db.query(`
      INSERT INTO stories (writer_id, story)
      VALUES (${req.session.user_id}, '${req.body.story}')
    `)
      .then(response => {
        res.redirect("/")
      })
      .catch(err => console.log('Error posting story to database: ', err.message));
  })

  return router;
}


module.exports = newStoryRoutes;
