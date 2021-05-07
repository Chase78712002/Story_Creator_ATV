const express = require("express");
const router = express.Router();

const contributionsRoutes = (db) => {

  // GET /contribution
  router.post("/:id", (req, res) => {
    console.log("Req id: ", req.params.id);
    db.query("DELETE FROM contributions WHERE id = $1", [req.params.id])
      .then(response => {
        console.log("Contribution id: ",req.params.id);

      })
      .catch(err => console.log('Get contributions error', err.message));
  });

  // POST contribution/create-contribution/:id
  router.post("/create-contribution/:story_id", (req, res) => {
    db.query(`
    INSERT INTO contributions (writer_id, story_id, contribution)
    VALUES
    (${req.session.user_id}, ${req.params.story_id}, ${req.body})
    `).then(response => {
      console.log("Req.body: ", response.body);
    })
    .catch(err => console.log('Create contribution error', err.message));
  })

  return router;
}

module.exports = contributionsRoutes;
