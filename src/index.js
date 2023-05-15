const dado = document.querySelector("#numero-dado");
const btnRoll = document.querySelector(".btn-roll");

btnRoll.addEventListener("click", function task() {
  const randomNumber = Math.ceil(Math.random() * 6);
  dado.innerHTML = randomNumber.toString();
});
