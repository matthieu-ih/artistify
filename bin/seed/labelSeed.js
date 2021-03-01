require("../../config/mongo");

const LabelModel = require('./../../model/Label')

const mongoose = require("mongoose");


const label = [{
    
    name : "XL Recordings",
    city : "London",
    country : "UK",
    street : "Codrington Mews, Notting Hill",
    streetNumber : 1,
    zipcode : "W11 2EH",
    logo : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614608160/Artistify/XL1_a9s1eg.jpg"
}, 

{
    name : "Ghostly International",
    city : "New York",
    country : "USA",
    street : "PO Box",
    streetNumber : 379,
    zipcode : "10276",
    logo : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614608160/Artistify/Ghostly1_urboa4.jpg"
},

{
    name : "YEAR0001",
    city : "Stockholm",
    country : "Sweden",
    street : "Krumkmakargatan",
    streetNumber : 22,
    zipcode : "11851",
    logo : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614608160/Artistify/Year00012_bjjttj.jpg"
},

]

LabelModel.create(label)
.then((dbsuccess) => {
    console.log(dbsuccess.length, " labels have been created");
    mongoose
      .disconnect()
      .then((ok) => console.log("mongoDB disconnected"))
      .catch((err) => console.log("error disconnecting mongoDB ", err));
  })
  .catch((dbError) => console.log(dbError));