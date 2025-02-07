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


