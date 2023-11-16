import "../css/reset.css";
import "../css/style.css";
import "../css/queries.css";
import fileData from "../json/data.json";

////////////////////////////
// Variables

////////////////////////////
// Elements
const dailyBtn = document.querySelector(".main-btn--daily"),
  weeklyBtn = document.querySelector(".main-btn--weekly"),
  monthlyBtn = document.querySelector(".main-btn--monthly");
const ellipsisEls = document.querySelectorAll(".ellipsis-container");
const workCur = document.querySelector(".current--work"),
  workPrev = document.querySelector(".previous--work"),
  playCur = document.querySelector(".current--play"),
  playPrev = document.querySelector(".previous--play"),
  studyCur = document.querySelector(".current--study"),
  studyPrev = document.querySelector(".previous--study"),
  exerciseCur = document.querySelector(".current--exercise"),
  exercisePrev = document.querySelector(".previous--exercise"),
  socialCur = document.querySelector(".current--social"),
  socialPrev = document.querySelector(".previous--social"),
  selfCareCur = document.querySelector(".current--self-care"),
  selfCarePrev = document.querySelector(".previous--self-care");

////////////////////////////
// Event-listeners
// remove hover effect of card when ellipsis are hovered over
ellipsisEls.forEach((el) =>
  el.addEventListener("mouseover", (e) => {
    // get parent card
    const card = e.target.closest(".card");
    // style it
    card.style.backgroundColor = "var(--dark-blue)";
  })
);
// undo removed hover effect when the hover stops
ellipsisEls.forEach((el) =>
  el.addEventListener("mouseout", (e) => {
    // get parent card
    const card = e.target.closest(".card");
    // unstyle it
    card.style.backgroundColor = "";
  })
);

// load weekly data when page loads
window.addEventListener("load", async () => {
  // display data
  displayData(fileData, "weekly");
});

// load weekly data when button is clicked
weeklyBtn.addEventListener("click", async (e) => {
  // display data
  displayData(fileData, "weekly");
  // toggle buttons active state
  toggleBtns(e.target);
});

// load daily data when button is clicked
dailyBtn.addEventListener("click", async (e) => {
  // display data
  displayData(fileData, "daily");
  // toggle buttons active state
  toggleBtns(e.target);
});

// load monthly data when button is clicked
monthlyBtn.addEventListener("click", async (e) => {
  // display data
  displayData(fileData, "monthly");
  // toggle buttons active state
  toggleBtns(e.target);
});

////////////////////////////
// Functions

// define data and display it to the DOM based on certain timeframe
function displayData(data, timeframe) {
  // define data
  const work = data.find((obj) => obj.title === "Work");
  const play = data.find((obj) => obj.title === "Play");
  const study = data.find((obj) => obj.title === "Study");
  const exercise = data.find((obj) => obj.title === "Exercise");
  const social = data.find((obj) => obj.title === "Social");
  const selfCare = data.find((obj) => obj.title === "Self Care");
  const prevText =
    timeframe === "weekly"
      ? "Last Week"
      : timeframe === "daily"
      ? "Yesterday"
      : "Last Month";

  // display data
  // work
  workCur.innerText = `${work.timeframes[timeframe].current}hrs`;
  workPrev.innerText = `${prevText} - ${work.timeframes[timeframe].previous}hrs`;
  // play
  playCur.innerText = `${play.timeframes[timeframe].current}hrs`;
  playPrev.innerText = `${prevText} - ${play.timeframes[timeframe].previous}hrs`;
  // study
  studyCur.innerText = `${study.timeframes[timeframe].current}hrs`;
  studyPrev.innerText = `${prevText} - ${study.timeframes[timeframe].previous}hrs`;
  // exercise
  exerciseCur.innerText = `${exercise.timeframes[timeframe].current}hrs`;
  exercisePrev.innerText = `${prevText} - ${exercise.timeframes[timeframe].previous}hrs`;
  // social
  socialCur.innerText = `${social.timeframes[timeframe].current}hrs`;
  socialPrev.innerText = `${prevText} - ${social.timeframes[timeframe].previous}hrs`;
  // self care
  selfCareCur.innerText = `${selfCare.timeframes[timeframe].current}hrs`;
  selfCarePrev.innerText = `${prevText} - ${selfCare.timeframes[timeframe].previous}hrs`;
}

// toggle active state of buttons
function toggleBtns(button) {
  // remove all classes
  dailyBtn.classList.remove("main-btn--active");
  monthlyBtn.classList.remove("main-btn--active");
  weeklyBtn.classList.remove("main-btn--active");
  // add active class to current element
  button.classList.add("main-btn--active");
}
