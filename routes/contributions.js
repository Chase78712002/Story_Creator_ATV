const express = require("express");
const router = express.Router();

const contributionsRoutes = (db) => {

  // GET /contribution
  router.get("/:story_id", (req, res) => {

    db.query("SELECT * FROM contributions JOIN writers ON writers.id = writer_id WHERE story_id = $1 ", [req.params.story_id])
      .then(response => {
        console.log(response.rows);
        res.json(response.rows);
      })
      .catch(err => console.log('Get contributions error', err.message));
  });

  // POST /contribution/:id


  return router;
}

module.exports = contributionsRoutes;
