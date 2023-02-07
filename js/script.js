var Dice = document.getElementById("Dice");
var nAdvise = document.getElementById("nAdvise");
var advise = document.getElementById("advice");


function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      nAdvise.textContent = Adviceobj.id;
      advise.textContent = '"' + Adviceobj.advice + '"';
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = () =>{
    getAdvice();
}

Dice.addEventListener("click", () =>{
    getAdvice();
})