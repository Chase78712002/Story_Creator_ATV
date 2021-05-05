const express = require("express");
const router = express.Router();

const contributionsRoutes = (db) => {

  // GET /contribution
  router.get("/:story_id", (req, res) => {

    db.query("SELECT * FROM contributions WHERE story_id = $1 ", [req.params.story_id])
      .then(response => {
        res.json(response.rows);
      })
      .catch(err => console.log('Get contributions error', err.message));
  });

  // POST /contribution/:id


  return router;
}

module.exports = contributionsRoutes;
