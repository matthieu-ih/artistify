require("../../config/mongo");

const ArtistModel = require('./../../model/Artist')

const artists = [
    {
        name : "The Hu",
        isBand : true,
        description : "The HU is a band from Mongolia that blends heavy metal and traditional Mongolian throat singing.",
        picture : "https://m.media-amazon.com/images/I/71-9I4-jfwL._SS500_.jpg"
    },
    {
        name : "Aurelio Voltaire",
        isBand : true,
        description : "Musician, filmmaker, author and gothic horror personality.",
        picture : "https://images-na.ssl-images-amazon.com/images/I/61GxA0ZoWML.jpg"
    },
    {
        name : "The Correspondents",
        isBand : true,
        description : "The Correspondents were a British electro swing duo based in London, formed by vocalist and MC Mr. Bruce and producer Tim Cole in 2007.",
        picture : "https://lh3.googleusercontent.com/proxy/QJ01MdpkQlg4-Vvi0d39_MrfeEMjyqos1X0QrFpaMb9Sgu8oUCAR5LVOBTF6_5smrHDwwddRcGLJBbW_sDuuM26CgMVhytA-kFfCDOx4RGqEY4-pq8vnnTU_fFMkIiC4WK2yBxpH-L_SUxG1X0xXRCvo4yhPj8Jta2cY1Wo"
    },
    {
        name : "AURORA",
        isBand : false,
        description : "Aurora Aksnes, known mononymously as AURORA, is a Norwegian singer, songwriter, and record producer.",
        picture : "https://e.snmc.io/i/600/w/1b5204f491b4c2da82ec15ed3da31dba/5935347/aurora-allmydemonsgreetingmeasafriend-cover-art.jpg"
        },
]

ArtistModel.create(artists)
  .then(success => {
    console.log(success);
  })
  .catch(error => {
    console.log(error);
  })