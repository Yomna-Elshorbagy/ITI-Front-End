// ====> 1- on load event firing
window.addEventListener("load", () => {
  document.body.focus();
  updateBallPosition();
  startGame();
});

// ====> 2- Get all elements Needed
let ball = document.getElementById("ball");
let scoreDisplay = document.getElementById("score");
let timerDisplay = document.getElementById("timer");
let restartBtn = document.getElementById("restartBtn");
//sections:
let one = document.getElementById("sectionOne");
let two = document.getElementById("sectionTwo");
let three = document.getElementById("sectionThree");
let four = document.getElementById("sectionFour");
let five = document.getElementById("sectionFive");
//flags:
let position = 0;
let score = 0;
let timeLeft = 30;
let gameOver = false;
// boxes game
sections = [one, two, three, four, five];

// ====> 3- update ball position
function updateBallPosition() {
  let target = sections[position]; //==> index section
  let rect = target.getBoundingClientRect(); //==> dimensions from viewport
  let containerEle = document
    .getElementById("mainWrapper")
    .getBoundingClientRect();
  console.log(rect.top, rect.left, rect.width, rect.height);
  //getBoundingClientRect ==> used to get the position and size of the section relative to the viewport.
  //Then the ball is placed in the center of it

  // Note ==> Remove hover effect from all
  sections.forEach((section) => section.classList.remove("hover-effect"));

  //Note ==> Add hover effect to current one
  target.classList.add("hover-effect");


  const ballSize = 40;
  let x = rect.left - containerEle.left + rect.width / 2 - ballSize / 2;
  //                 left position  - horizontal center - Shifts left so it’s centered,
  let y = rect.top - containerEle.top + rect.height / 2 - ballSize / 2;
  ball.style.transform = `translate(${x}px, ${y}px)`;
}

// ====> 4- jump to the section beside
function jumpAnimation() {
  ball.style.transition = "transform 0.3s ease, top 0.2s ease";
  ball.style.top = "-20px";
  setTimeout(() => {
    ball.style.top = "0";
  }, 200);
}

// ====> 5- firing event keydown
document.addEventListener("keydown", (e) => {
  if (gameOver) return;

  if (e.key === "ArrowRight" && position < sections.length - 1) {
    position++;
    score++;
    scoreDisplay.innerText = score;
    jumpAnimation();
    updateBallPosition();
  } else if (e.key === "ArrowLeft" && position > 0) {
    position--;
    score++;
    scoreDisplay.innerText = score;
    jumpAnimation();
    updateBallPosition();
  }
});

// ====> 6- firing event keydown
function startGame() {
  position = 0;
  score = 0;
  timeLeft = 30;
  gameOver = false;

  scoreDisplay.innerText = "0";
  timeLeft.innerText = "30";
  updateBallPosition();
  restartBtn.style.display = "none";

  let timeCount = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.innerText = timeLeft;
    } else {
      clearInterval(timeCount);
      gameOver == true;

      Swal.fire({
        title: "⏰ Time's up!",
        text: `Your score is ${score}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "🔁 Restart",
        cancelButtonText: "❌ Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          startGame();
        } else {
          gameOver = true;
          restartBtn.style.display = "inline-block";
        }
      });

      restartBtn.style.display = "inline-block";
    }
  }, 1000);
}

// ====> 7- firing button click event
restartBtn.addEventListener("click", startGame);
