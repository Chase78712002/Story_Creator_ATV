const express = require('express');
const router = express.Router();

const newStoryRoutes = (db) => {
  // GET /new_story
  router.get("/", (req, res) => {
    res.render("new_story");
  });


  return router;
}


module.exports = newStoryRoutes;
