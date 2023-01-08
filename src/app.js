import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let palos = [" ♦ ", "♠ ", "♣", "♥ "];
  let numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "C",
    "R",
    "AS"
  ];
  //creacion de randoms
  let rdm1 = Math.floor(Math.random() * palos.length);
  let rdm2 = Math.floor(Math.random() * numeros.length);
  // seleccion de elementos
  let top = document.querySelector(".top");
  let number = document.querySelector(".number");
  let abajo = document.querySelector(".abajo");
  // modificacion de elemtos
  top.innerHTML = palos[rdm1];
  number.innerHTML = numeros[rdm2];
  abajo.innerHTML = palos[rdm1];
};
