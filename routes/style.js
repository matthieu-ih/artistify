const express = require("express");
const router = express.Router();
const StylesModel = require("./../model/Styles");

/* GET home page. */
router.get("/", async (req, res) => {
    StylesModel.find()
    .then((styles)=> {
    res.render("dashboard/styles", {styles});
    })
    .catch((err) => {
        next(err);
    })
});

module.exports = router;