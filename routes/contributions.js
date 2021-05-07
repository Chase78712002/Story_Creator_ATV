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
    console.log(req.params.story_id);
    db.query(
      `
    INSERT INTO contributions (writer_id, story_id, contribution)
    VALUES ($1, $2, $3)
    `,
      [req.session.user_id, req.params.story_id, req.body.story]
    )
      .then((response) => {
        console.log("Req.body: ", req.body.story);
        res.redirect(`/story/${req.params.story_id}`);
      })
      .catch((err) => console.log("Create contribution error", err.message));
  });

  // POST contribution/vote/:id
  router.post("/vote/:id", (req, res) => {
    db.query(`

    `)
  })

  return router;
}

module.exports = contributionsRoutes;
