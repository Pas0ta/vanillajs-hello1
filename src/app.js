/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let a = ["Hello Rigo from the console!"];
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * what.length);
  let rdm3 = Math.floor(Math.random() * when.length);
  document.write.body.innerHTML = a + who[rdm1] + what[rdm2] + when[rdm3];
};
