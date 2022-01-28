const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);
function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));
  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    for(let randomNum = 7;
  randomNum++;)
    randomNumEl.innerHTML = randomNum;

  }
}