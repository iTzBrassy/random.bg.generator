// let css = document.querySelector("h3");
// let color1 = document.querySelector(".color1");
// let color2 = document.querySelector(".color2");
// let body = document.getElementById("gradient-bg");

// function setGradient() {
//   body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

//   css.textContent = body.style.background + ";";
// }

// css.addEventListener("onload", setGradient());
// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient-bg");
let randButton = document.getElementById("rand-button");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + ";";
}
function randHex() {
  // random number generator for hexidecimal
  let randNum =
  //0xffffff gives a random hex value 
  //<< 0 shift left 0 bits
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  // let randNum = Math.floor(Math.random() * 256);
  return randNum;
}
// console.log(randRgb());
// function randomColor() {
//     let x = randRgb();
//     let y = randRgb();
//     let z = randRgb();
//     let bgRgba = `rgb(${x}, ${y}, ${z})`;
//     return bgRgba;
// };
// console.log(randomColor());

css.addEventListener("onload", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randButton.addEventListener("click", function () {
  color1.value = randHex();
  color2.value = randHex();
  setGradient();
});
