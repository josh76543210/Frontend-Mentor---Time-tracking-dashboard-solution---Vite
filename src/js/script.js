import "../css/reset.css";
import "../css/style.css";
import "../css/queries.css";
// import viteLogo from "./vite.svg";
import { setupCounter } from "./counter.js";

////////////////////////////
// Variables
let reportData = [];

////////////////////////////
// Elements
const dailyBtn = document.querySelector(".main-btn--daily");
const weeklyBtn = document.querySelector(".main-btn--weekly");
const monthlyBtn = document.querySelector(".main-btn--monthly");
const ellipsisEls = document.querySelectorAll(".ellipsis-container");

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

////////////////////////////
// Functions
async function getData() {
  const res = await fetch("../json/data.json");
  const data = await res.json();
  console.log(data);
  return data;
}
reportData = await getData();
console.log(reportData);
