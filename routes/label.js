const express = require("express");
const router = express.Router();
const LabelModel = require('./../model/Label')

/* GET home page. */

router.get("/", async (req, res) => {
  LabelModel.find()
  .then(labelList => {
    res.render("dashboard/labels", {label: labelList});
  })
  .catch((error) => {
    next(error);
  })
});

module.exports = router;