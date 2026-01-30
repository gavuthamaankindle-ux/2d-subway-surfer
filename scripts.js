score = 0
let scorecalc = setInterval(() => {
  score += 1
}, 20)
function moveleft() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}



function moveright() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") {
    moveleft();
  } else if (event.key === "ArrowRight") {

    moveright();
  }
})

var block = document.getElementById("block");
block.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3) * 100;
  block.style.left = random + "px";
});

// var coin = document.getElementById("coin");
// coin.addEventListener("animationiteration", () => {
//   var random = Math.floor(Math.random() * 3) * 100;
//   coin.style.left = random + "px";
// });

var character = document.getElementById("character");

setInterval(() => {

  var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  if (characterLeft === blockLeft && blockTop >= 300 && blockTop < 400) {
    alert("Game Over. Reload to Play Again.score is" + score);
    block.style.animation = "none";
    image.style.animation = "none";
    clearInterval(scorecalc)
  };
}
  , 1);


document.getElementById('left').addEventListener
  ('touch', moveleft);
document.getElementById('right').addEventListener
  ('touch', moveright);


setInterval(() => {
  document.getElementById("scoreboard").innerHTML = `<p class="score">Score:${score}</p>`;
}, 6);
