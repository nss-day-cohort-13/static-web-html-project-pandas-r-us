


/****************************************************
              Creates array of objects for cards
****************************************************/

var cardArray = [];

var cardOne = {
  name: "Panda Bear",
  desctiption: "Your standard, cute panda bear.",
  price: "100,000",
  url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG"
}

var cardTwo = {
  name: "Dog Panda",
  desctiption: "Always loyal, and can be trained to do tricks.",
  price: "500",
  url: "https://s-media-cache-ak0.pinimg.com/736x/f1/03/3e/f1033e9b7493082efa6325f8e00c57f6.jpg"
}

var cardThree = {
  name: "Red Panda",
  desctiption: "A small panda that is red.",
  price: "150,000",
  url: "http://virginiazoo.org/wp-content/uploads/2015/06/redpanda-250x250.jpg"
}

var cardFour = {
  name: "Make Your Own Panda Kit",
  desctiption: "Never run out of pandas!",
  price: "200,000",
  url: "https://s-media-cache-ak0.pinimg.com/736x/fd/77/00/fd7700e79a9ec7d42b9d93957f34fc6f.jpg"
}

var cardFive = {
  name: "Panda Express",
  desctiption: "All you can eat.",
  price: "6.95",
  url: "https://s3-media3.fl.yelpcdn.com/bphoto/DJNFCNYtgNyhFR6hKp_u5w/ls.jpg"
}

var cardSix = {
  name: "Albino Panda",
  desctiption: "A rare, white panda.",
  price: "60,000",
  url: "http://assets.worldwildlife.org/photos/4158/images/priority_species_small/bear.JPG?1368624639"
}

var cardSeven = {
  name: "Zebra Panda",
  desctiption: "Striped for your pleasure.",
  price: "80,000",
  url: "http://vignette4.wikia.nocookie.net/naughtybear/images/9/9a/Squeaky_The_Zebra_Bear.PNG/revision/latest?cb=20150527100425"
}

var cardEight = {
  name: "Panda Teddy",
  desctiption: "A plush panda for you cheap bastards.",
  price: "12.95",
  url: "http://33.media.tumblr.com/447982f4b2df940af6371abf018173fc/tumblr_inline_n0s0wfkmaM1s84bui.jpg"
}

cardArray.push(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight);


cardArticle = document.getElementById("card");

var numberOfCards = cardArray.length;

for (var i = 0; i < numberOfCards; i++){
  currentCard = cardArray[i];
  var title = "<h1>" + currentCard.name + "</h1>";
  var description = "<p>" + currentCard.desctiption + "</p>";
  var price = "<p>$" + currentCard.price + "</p>";
  var img = "<img src=\"" + currentCard.url + "\" alt=\"Pandas\">"

  cardArticle.innerHTML += "<article class=\"cards\">"
                        + title
                        + img
                        + description
                        + price
                        + "</article>"
}






  // class=\"cardArticle\"><header class=\"cards\" class=\"header\">" + title
  // + "</header><div class=\"picture\"><img src=" + img
  // + " alt=\"Pandas\" ></div><p class=\"description\">" + description
  // + "</p><header class=\"header\">" + price
  // + " </header></article>"
