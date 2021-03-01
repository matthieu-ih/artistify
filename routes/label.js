const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("dashboard/labels");
});

module.exports = router;