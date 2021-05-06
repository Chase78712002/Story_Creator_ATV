const express = require("express");
const router = express.Router();

const storyRoutes = (db) => {
  // GET /story
  router.get("/", (req, res) => {
    db.query("SELECT * FROM stories JOIN writers ON writers.id = writer_id;")
      .then((response) => {
        res.json(response.rows);
      })
      .catch((err) => console.log("View stories error", err.message));
  });

  // GET /story/:id
  router.get("/:id", (req, res) => {
    console.log("Session obj: ", req.session.user_id);
    db.query(
      "SELECT * FROM stories JOIN writers ON writers.id = writer_id JOIN contributions ON stories.id = story_id WHERE stories.writer_id = $1;",
      [req.params.id]
    )
      .then((response) => {
        let statusVal = "In progress";
        if (response.rows[0].complete) {
          statusVal = "complete"
        };

        const templateVars = {
          storyObj: response.rows[0],
          contributionArr: response.rows,
          sessionId: req.session.user_id,
          status: statusVal
        };
        res.render("story", templateVars);
      })
      .catch((err) => console.log("View specific story error", err.message));
  });

  // PUT /story/:id
  router.put("/:id", (req, res) => {
    console.log("data type req.body: ", typeof req.body.contribution_data);
    db.query(
      `
     UPDATE stories
     SET story = CONCAT(story, $1::text)
     WHERE id = $2;
     `,
      [req.body.contribution_data, req.params.id]
    )
      .then((response) => {
        res.json({
          contribution: req.body.contribution_data,
          id: req.params.id,
        });
      })
      .catch((err) => console.log("Edit story error", err.message));
  });

  // POST /story/:id
  router.post("/", (req, res) => {
    db.query(`INSERT INTO stories (story) VALUES ($1)`, [req.body.story])
      .then((response) => {
        res.json({ story: req.body.story });
      })
      .catch((err) => console.log("Create story error", err.message));
  });

  return router;
};

module.exports = storyRoutes;
