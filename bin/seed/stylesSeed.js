const styles = [
    {name: "heavy metal", color: "black", wikiURL: "https://en.wikipedia.org/wiki/Heavy_metal_music"},
    {name: "classical", color: "green", wikiURL: "https://en.wikipedia.org/wiki/Classical_music"},
    {name: "blues", color: "blue", wikiURL: "https://en.wikipedia.org/wiki/Blues"},
    {name: "punk rock", color: "yellow", wikiURL: "https://en.wikipedia.org/wiki/Punk_rock"},
    {name: "jazz", color:"grey", wikiURL: "https://en.wikipedia.org/wiki/Jazz"},
    {name: "hip hop", color: "red", wikiURL: "https://en.wikipedia.org/wiki/Hip_hop_music"},
    {name: "oldies", color:"orange", wikiURL: "https://en.wikipedia.org/wiki/Oldies"},
    {name: "latin music", color: "pink", wikiURL: "https://en.wikipedia.org/wiki/Latin_music"}
]

require("../../config/mongo");
const StylesModel = require("./../../model/Styles");
const mongoose = require("mongoose");

StylesModel.create(styles)
.then((dbsuccess) => {
    console.log(dbsuccess.length, " styles have been created");
    mongoose
      .disconnect()
      .then((ok) => console.log("mongoDB disconnected"))
      .catch((err) => console.log("error disconnecting mongoDB ", err));
  })
  .catch((dbError) => console.log(dbError));