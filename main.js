


/****************************************************
              Creates array of objects for cards
****************************************************/

var cardArray = [];


// objects to go into array to create cards
var cardOne = {
  name: "Panda Bear",
  desctiption: "Your standard, cute panda bear.",
  price: "100,000",
  url: "/images/pandabear.jpg"
}

var cardTwo = {
  name: "Dog Panda",
  desctiption: "Always loyal, and can be trained to do tricks.",
  price: "500",
  url: "/images/dogpanda.jpg"
}

var cardThree = {
  name: "Red Panda",
  desctiption: "A small panda that is red.",
  price: "150,000",
  url: "/images/redpanda.jpg"
}

var cardFour = {
  name: "Make Your Own Panda Kit",
  desctiption: "Never run out of pandas!",
  price: "200,000",
  url: "/images/makeyourownpanda.jpg"
}

var cardFive = {
  name: "Panda Express",
  desctiption: "All you can eat.",
  price: "6.95",
  url: "/images/pandaexpress.jpg"
}

var cardSix = {
  name: "Albino Panda",
  desctiption: "A rare, white panda.",
  price: "60,000",
  url: "/images/albinopanda.jpg"
}

var cardSeven = {
  name: "Zebra Panda",
  desctiption: "Striped for your pleasure.",
  price: "80,000",
  url: "/images/zebrapanda.jpg"
}

var cardEight = {
  name: "Panda Teddy",
  desctiption: "A plush panda for you cheap bastards.",
  price: "12.95",
  url: "/images/pandateddy.jpg"
}

// putting objects into array
cardArray.push(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight);


cardArticle = document.getElementById("card");

// gets the length of array to determin how many loops to do
var numberOfCards = cardArray.length;

// loop that adds elements to html based on the number of object(cards) created
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






