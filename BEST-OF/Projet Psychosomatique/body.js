//Fonction Hover sur l'organe qui declenche changement de couleur organs, line, circle au passage de la souri et qui initialise leur couleur au départ de la sortie

const bodyImg = document.getElementById("bodyImg");
const liver = document.getElementById("liver");
const lungs = document.getElementById("lungs");
const intestines = document.getElementById("intestines");

document.addEventListener("DOMContentLoaded", (event) => {
  const organs = document.querySelectorAll(".organs");
  const bodyImg = document.getElementById("bodyImg");
  const originalSrc = bodyImg.src;

  organs.forEach((organ) => {
    organ.addEventListener("mouseover", () => {
      const arrowId = organ.getAttribute("data-arrow");
      organ.style.color = "rgb(13, 99, 202)";
      document.querySelector(
        `#arrowContainer${arrowId} .line`
      ).style.backgroundColor = "rgb(13, 99, 202)";
      document.querySelector(
        `#arrowContainer${arrowId} .circle`
      ).style.backgroundColor = "#f50531";

      if (organ.id === "liver") {
        bodyImg.src = "./images/foie.png";
      } else if (organ.id === "lungs") {
        bodyImg.src = "./images/poumons.png";
      } else if (organ.id === "intestines") {
        bodyImg.src = "./images/intestins.png";
      }
    });

    organ.addEventListener("mouseout", () => {
      const arrowId = organ.getAttribute("data-arrow");
      organ.style.color = "";
      document.querySelector(
        `#arrowContainer${arrowId} .line`
      ).style.backgroundColor = "";
      document.querySelector(
        `#arrowContainer${arrowId} .circle`
      ).style.backgroundColor = "";

      bodyImg.src = originalSrc;
    });
  });
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

