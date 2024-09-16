
var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage1="./images/"+"dice"+randomNumber+".png";
var image1=document.querySelector("img")[0].image1.setAttribute("src",randomImage1);
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage2="./images/"+"dice"+randomNumber1+".png";
var image2=document.querySelectorAll("img")[1].image2.setAttribute("src",randomImage2);
if(randomNumber>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 1 is Winner";
}
else if(randomNumber1>randomNumber)
{
    document.querySelector("h1").innerHTML="Player 2 is Winner";
}
else
{
    document.querySelector("h1").innerHTML="Draw"
}