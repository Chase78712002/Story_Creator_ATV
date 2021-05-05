const express = require("express");
const router = express.Router();

const contributionsRoutes = (db) => {

  // GET /contribution
  router.get("/", (req, res) => {
    console.log(req.body);
    // db.query("SELECT * FROM contributions WHERE story_id = $1 ", [])
    //   .then(response => {

    //   })
    //   .catch(err => console.log('Get contributions error', err.message));
  });

  // POST /contribution/:id


  return router;
}

module.exports = contributionsRoutes;
