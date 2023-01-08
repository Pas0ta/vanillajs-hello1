function randomcard() {
  const palos = ["picas", "bastos", "espadas", "corazones"];
  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jota",
    "caballo",
    "rey",
    "as",
  ];

  let card = Math.floor(Math.random(palos.length));
  let numbercard = math.floor(math.random(numeros.length));
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = genExcuse();
  console.log();
};
function genExcuse() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * what.length);
  let rdm3 = Math.floor(Math.random() * when.length);
  return who[rdm1] + " " + what[rdm2] + " " + when[rdm3];
}
