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


router.get('/create', (req, res, next) => {
  res.render('dashboard/labelCreate');
});

router.post('/create', (req, res, next) => {
  LabelModel.create(req.body)
  .then(newLabel => {
    console.log(newLabel)
    res.redirect('/dashboard/label')
  })
  .catch((error) => {
    next(error);
    res.render('dashboard/labelCreate');
    console.log(error);
  })
})


router.get('/update/:id', (req, res, next) => {
  LabelModel.findById(req.params.id)
  .then((label)=>{
    res.render("dashboard/labelUpdate", {label})
  })
  .catch((error)=> {
    next(error);
    console.log(error)

  })
});

router.post('/update/:id', (req, res, next) => {
  LabelModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then((label)=> {
    res.redirect("/dashboard/label")

  })
  .catch((error)=> {
  next(error);
  res.render("dashboard/labelUpdate")

  });

});


router.get('/delete/:id', (req, res, next) => {
  LabelModel.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect("/dashboard/label")
  })
  .catch((error) => {
    next(error)
  });
});

module.exports = router;