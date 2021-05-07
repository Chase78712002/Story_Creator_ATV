const express = require("express");
const router = express.Router();

const storyRoutes = (db) => {
  // GET /story
  router.get("/", (req, res) => {
    db.query(`
    SELECT stories.id, writer_id, story, vote, complete, name
    FROM stories
    JOIN writers ON writers.id = writer_id;
    `)
      .then((response) => {
        console.log('response.rows: ', response.rows)
        res.json(response.rows);
      })
      .catch((err) => console.log("View stories error", err.message));
  });

  // GET /story/:id
  router.get("/:id", (req, res) => {
    console.log("req.session.user_id: ", req.session.user_id);
    // story query
    db.query(
      `
      SELECT stories.id, writer_id, story, complete, name
      FROM stories
      JOIN writers ON writers.id = writer_id
      WHERE stories.id = $1;
      `,
      [req.params.id]
    )
      .then((response) => {
        console.log("story query response.rows", response.rows);
        const templateVars = {
          storyObj: response.rows[0],
          sessionId: req.session.user_id,
          storyId: req.params.id,
        };
        return templateVars;
      })
      .then((response) => {
        console.log("response.storyObj: ", response.storyObj);
        console.log("response.sessionID: ", response.sessionId);
        console.log("response.storyId: ", response.storyId);
        const storyVars = response.storyObj;
        const sessionVars = response.sessionId;
        const storyIdVars = response.storyId;
        // contribution query
        db.query(
          `
            SELECT id, writer_id, story_id, contribution, vote, accepted
            FROM contributions
            WHERE story_id = $1;
          `,
          [req.params.id]
        ).then((response) => {
          console.log("contribution query response.rows", response.rows);
          // use the response to render the story.ejs page
          const templateVars = {
            storyOBJ1: storyVars,
            sessionId: sessionVars,
            storyId: storyIdVars,
            contributionArr: response.rows,
          };
          res.render("story", templateVars);
        });
      })
      .catch((err) => console.log("View specific story error", err.message));
  });

  // PUT /story/:id
  router.post("/:id", (req, res) => {
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
          contrib_id: req.body.contribution_id,
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
