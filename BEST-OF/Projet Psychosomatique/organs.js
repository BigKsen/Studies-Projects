const lienEmotion = document.getElementById("lienEmotion");
const situation = document.getElementById("situation");
const solution = document.getElementById("solution");

const lienEmotionText = document.getElementById("lienEmotionText");
const situationText = document.getElementById("situationText");
const solutionText = document.getElementById("solutionText");

const titelTextEmotion = document.getElementById("titelTextEmotion");
const titelTextSituation = document.getElementById("titelTextSituation");
const titelTextSolution = document.getElementById("titelTextSolution");

lienEmotion.addEventListener("click", () => {
  lienEmotion.style.background = "rgb(13, 99, 202)";
  lienEmotion.style.height = "12%";
  lienEmotion.style.position = "relative";
  lienEmotion.style.top = "-12%";
  titelTextEmotion.style.display = "block";
  lienEmotionText.style.display = "block";

  situation.style.height = "9%";
  situation.style.position = "relative";
  situation.style.top = "-9%";

  solution.style.height = "9%";
  solution.style.position = "relative";
  solution.style.top = "-9%";

  situationText.style.display = "none";
  solutionText.style.display = "none";

  solution.style.background = "white";
  situation.style.background = "white";

  titelTextSituation.style.display = "none";
  titelTextSolution.style.display = "none";
});

situation.addEventListener("click", () => {
  situation.style.background = "rgb(13, 99, 202)";
  situation.style.height = "12%";
  situation.style.position = "relative";
  situation.style.top = "-12%";
  titelTextSituation.style.display = "block";
  situationText.style.display = "block";

  lienEmotion.style.height = "9%";
  lienEmotion.style.position = "relative";
  lienEmotion.style.top = "-9%";

  solution.style.height = "9%";
  solution.style.position = "relative";
  solution.style.top = "-9%";

  lienEmotionText.style.display = "none";
  solutionText.style.display = "none";

  solution.style.background = "white";
  lienEmotion.style.background = "white";

  titelTextEmotion.style.display = "none";
  titelTextSolution.style.display = "none";
});

solution.addEventListener("click", () => {
  solution.style.background = "rgb(13, 99, 202)";
  solution.style.height = "12%";
  solution.style.position = "relative";
  solution.style.top = "-12%";
  titelTextSolution.style.display = "block";
  solutionText.style.display = "block";

  lienEmotion.style.height = "9%";
  lienEmotion.style.position = "relative";
  lienEmotion.style.top = "-9%";

  situation.style.height = "9%";
  situation.style.position = "relative";
  situation.style.top = "-9%";

  situationText.style.display = "none";
  lienEmotionText.style.display = "none";

  lienEmotion.style.background = "white";
  situation.style.background = "white";

  titelTextSituation.style.display = "none";
  titelTextEmotion.style.display = "none";
});


//Fonction de la NAVBAR
const chevronDown = document.querySelector(".chevronDown");
const chevronDown2 = document.querySelector(".chevronDown2");
const dropDownDiv = document.querySelector(".dropDownDiv");
const dropDownDiv2 = document.querySelector(".dropDownDiv2");

function toggleVisibility(element) {
  if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}

chevronDown.addEventListener("click", () => {
  toggleVisibility(dropDownDiv);
});

chevronDown2.addEventListener("click", () => {
  toggleVisibility(dropDownDiv2);
});



const sandwich = document.getElementById("sandwich")
const navbar = document.getElementById("navbar")

function toggleVisibility(element) {
  if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}
sandwich.addEventListener("click", () => {
  toggleVisibility(navbar)
})


