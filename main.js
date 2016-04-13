


/****************************************************
              Creates array of objects for cards
****************************************************/

var cardArray = [];

var cardOne = {
  name: "Panda Bear",
  desctiption: "Your standard, cute panda bear.",
  price: "100,000",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardTwo = {
  name: "Dog Panda",
  desctiption: "desctiption2",
  price: "price2",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardThree = {
  name: "Name3",
  desctiption: "desctiption3",
  price: "price3",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardFour = {
  name: "name4",
  desctiption: "desctiption4",
  price: "price4",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardFive = {
  name: "name5",
  desctiption: "desctiption5",
  price: "price5",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardSix = {
  name: "name6",
  desctiption: "desctiption6",
  price: "price6",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardSeven = {
  name: "name7",
  desctiption: "desctiption7",
  price: "price7",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

var cardEight = {
  name: "name8",
  desctiption: "desctiption8",
  price: "price8",
  url: "http://sourcefed.com/wp-content/uploads/2012/10/twitter-for-ios-app-thumbnail.jpg"
}

cardArray.push(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight);


cardArticle = document.getElementById("card");

var numberOfCards = cardArray.length;

for (var i = 0; i < numberOfCards; i++){
  currentCard = cardArray[i];
  var title = "<h1>" + currentCard.name + "</h1>";
  var description = "<p>" + currentCard.desctiption + "</p>";
  var price = "<p>$" + currentCard.price + "</p>";
  var img = currentCard.url;

  cardArticle.innerHTML += "<article class=\"cardArticle\"><header class=\"cards\" class=\"header\">" + title
  + "</header><div class=\"picture\"><img src=" + img
  + " alt=\"Pandas\" ></div><p class=\"description\">" + description
  + "</p><header class=\"header\">" + price
  + " </header></article>"
}