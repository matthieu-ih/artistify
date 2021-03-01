const express = require("express");
const router = express.Router();
const ArtistModel = require('./../model/Artist')

/* GET home page. */
router.get("/", async (req, res) => {
  ArtistModel.find()
  .then(artistList => {
    res.render("dashboard/artists", {artist: artistList});
  })
  .catch((error) => {
    next(error);
  })
});

module.exports = router;