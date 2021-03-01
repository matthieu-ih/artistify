const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylesModel = new Schema({
    name : {
        type : String,
        unique : true
    },
    color : {
        type : String,
        default : "#000"
    },
    wikiURL : {
        type : String,
     }
});

const StylesModel = mongoose.model("Styles", stylesModel);
module.exports = StylesModel;