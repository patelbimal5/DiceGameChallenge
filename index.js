var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1 Won!";
}
else if (randomNumber1 == randomNumber2)
{
  document.querySelector("h1").innerHTML="Opps! It is Draw";
}
else
{
  document.querySelector("h1").innerHTML="Player2 is Won";
}

//alert(randomNumber1);
