var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var player1 = prompt("Please enter player1 name");
var player2 = prompt("Please enter player2 name");

document.querySelectorAll("p")[0].innerHTML=player1;
document.querySelectorAll("p")[1].innerHTML=player2;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h2").innerHTML="" + player1 + " Won!";
}
else if (randomNumber1 == randomNumber2)
{
  document.querySelector("h2").innerHTML="Opps! It is Draw";
}
else
{
  document.querySelector("h2").innerHTML="Player2 Won";
}

//alert(randomNumber1);
