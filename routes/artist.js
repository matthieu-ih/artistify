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

router.get("/create", async (req, res) => {
  res.render("dashboard/artistCreate")
})

router.post("/create", (req, res, next) => {
  const { name, isBand, description, picture } = req.body;
  ArtistModel.create(req.body)
  .then(() => {
    res.redirect("/dashboard/artist");
  })
  .catch((error) => {
    next(error);
  })
});

router.get("/update/:id", (req, res, next) => {
  ArtistModel.findById(req.params.id)
  .then((artist) => {
    res.render("dashboard/artistUpdate", {artist})
  })
  .catch((error) => {
    next(error);
  })
})

router.post("/update/:id", (req, res, next) => {
  const { name, isBand, description, picture } = req.body;
  ArtistModel.findByIdAndUpdate(req.params.id, {
    name,
    isBand: isBand === "on",
    description,
    picture })
  .then(() => {
    res.redirect("/dashboard/artist")
  })
  .catch((error) => {
    next(error);
  })
});

router.get("/delete/:id", (req, res, next) => {
  ArtistModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/dashboard/artist")
  })
  .catch((error) => {
    next(error);
  })
});

module.exports = router;