const express = require('express');
const router = express.Router();

const storyLitRoutes = (db) => {
  // GET /storyList
  router.get("/", (req, res) => {
    res.render("storyList");
  });


  return router;
}


module.exports = storyLitRoutes;
