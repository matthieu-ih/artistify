require("../../config/mongo");

const ArtistModel = require('./../../model/Artist')

const artists = [
    {
        name : "The Hu",
        isBand : true,
        description : "The HU is a band from Mongolia that blends heavy metal and traditional Mongolian throat singing.",
        picture : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614597294/Artistify/TheHu_li5cyi.jpg"
    },
    {
        name : "Aurelio Voltaire",
        isBand : true,
        description : "Musician, filmmaker, author and gothic horror personality.",
        picture : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614597295/Artistify/Voltaire_ogn8ek.jpg"
    },
    {
        name : "The Correspondents",
        isBand : true,
        description : "The Correspondents were a British electro swing duo based in London, formed by vocalist and MC Mr. Bruce and producer Tim Cole in 2007.",
        picture : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614597294/Artistify/Correspondents_u0m7he.jpg"
    },
    {
        name : "AURORA",
        isBand : false,
        description : "Aurora Aksnes, known mononymously as AURORA, is a Norwegian singer, songwriter, and record producer.",
        picture : "https://res.cloudinary.com/dsldnzayz/image/upload/v1614597295/Artistify/Aurora_kicqwq.webp"
        },
]

ArtistModel.create(artists)
  .then(success => {
    console.log(success);
  })
  .catch(error => {
    console.log(error);
  })