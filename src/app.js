/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let num = Math.floor(Math.random() * 13) + 1;
  if (num == 11) {
    document.querySelector(".number").innerHTML = "J";
  } else if (num == 12) {
    document.querySelector(".number").innerHTML = "Q";
  } else if (num == 13) {
    document.querySelector(".number").innerHTML = "K";
  } else if (num == 1) {
    document.querySelector(".number").innerHTML = "A";
  } else {
    document.querySelector(".number").innerHTML = num;
  }

  let palo = ["♦", "♥", "♠", "♣"];
  let numPalo = Math.floor(Math.random() * 3);
  document.querySelector(".paloTop").innerHTML = palo[numPalo];
  if (palo[numPalo] == "♦") {
    let rombo = document.querySelector(".paloTop");
    rombo.style.color = "red"
  } else if (palo[numPalo] == "♥") {
    let corazon = document.querySelector("paloTop");
    corazon.style.color = "red"
  } else if (palo[numPalo] == "♠"){
    let picas = document.querySelector("paloTop");
    picas.style.color = 
  } else {
    let trebol
  }
};


// rotated.style.transform = 'rotate(90deg)