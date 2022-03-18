arrOfImage = [
  "https://www.rockpaperscissor.online/assets/images/rock-large.png",
  "https://www.rockpaperscissor.online/assets/images/paper-large.png",
  "https://www.rockpaperscissor.online/assets/images/scissors-large.png",
];
let userChoice = document.getElementsByClassName("User");
let _user = document.getElementById("_user");
let _tie = document.getElementById("_tie");
let _comp = document.getElementById("_comp");

let uw = document.getElementById("uw");
let cw = document.getElementById("cw");
_comp.innerText = 0;
_tie.innerText = 0;
_user.innerText = 0;

for (let choice of userChoice) {
  let userFinal = Number(choice.id);

  choice.addEventListener("click", function () {
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice, userFinal)
    count = 0;

    x = setInterval(function () {
      console.log("harsh");
      count++;
      let uCC = document.getElementById("uCC");
      let cCC = document.getElementById("cCC");
      uCC.src = arrOfImage[Math.floor(Math.random() * 3)];
      cCC.src = arrOfImage[Math.floor(Math.random() * 3)];

      if (count > 8) {
        uCC.src = arrOfImage[userFinal];
        cCC.src = arrOfImage[computerChoice];
        clearInterval(x);
      }
    }, 100);
    let c = computerChoice;
    let u = userFinal;
    setTimeout(function () {
      {
        if ((c == 1 && u == 0) || (c == 2 && u == 1) || (c == 0 && u == 2)) {
          // print("Computer Wins")
          _comp.innerText = Number(_comp.innerText) + 1;
          cw.innerText = "Wins";
          uw.innerText = "loss";
          cw.classList.add("winner");
          uw.classList.remove("winner");
          uw.classList.add("looser");
          cw.classList.remove("looser");
        } else if (
          (c == 0 && u == 1) ||
          (c == 1 && u == 2) ||
          (c == 2 && u == 0)
        ) {
          // print("User Wins")
          _user.innerText = Number(_user.innerText) + 1;
          uw.innerText = "Wins";
          cw.innerText = "Loss";
          cw.classList.add("looser");
          cw.classList.remove("winner");
          uw.classList.add("winner");
          uw.classList.remove("losser");
        } else if (c == u) {
          _tie.innerText = Number(_tie.innerText) + 1;
          uw.innerText = "Ties";
          cw.innerText = "Ties";
          cw.classList.remove("looser");
          uw.classList.remove("looser");
          cw.classList.remove("winner");
          uw.classList.remove("winner");
        }
      }
    }, 2010);
    console.log(userFinal, computerChoice);
  });
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  cw.innerText = "Reset";
  uw.innerText = "Game";
  _tie.innerText = 0;
  _comp.innerText = 0;
  _user.innerText = 0;
});
