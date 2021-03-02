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

router.get('/create', (req, res) => {
res.render('dashboard/styleCreate');
});

router.post('/create', (req, res) => {

    StylesModel.create(req.body)
    
    .then(style => {
        console.log(style);
        res.redirect('/dashboard/style');
    })
    .catch(error => {
        res.render('dashboard/styleCreate');
        console.log(error);
    });
});


router.get('/update/:id', (req, res) => {

    StylesModel.findById(req.params.id)

        .then(style => {
            res.render('dashboard/styleUpdate', {style});
        })
        .catch(error => {
            console.log(error);
        });
    });
    
    router.post('/update/:id', (req, res) => {
    
        StylesModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        
        .then(style => {
            console.log(style);
            res.redirect('/dashboard/style');
        })
        .catch(error => {
            res.render('dashboard/styleUpdate');
            console.log(error);
        });
    });


    router.get("/delete/:id", (req, res, next) => {
        StylesModel.findByIdAndDelete(req.params.id)
        .then(() => {
          res.redirect("/dashboard/style")
        })
        .catch((error) => {
          next(error);
        });
      });

module.exports = router;