// MENU DEROULANT

let btn_menu = document.querySelector(".btn_menu")
let dropdownContent = document.querySelector(".dropdownContent")

btn_menu.addEventListener("click", () =>
{
  dropdownContent.classList.toggle("show");;
  $("#propertyImg").fadeToggle(500);
  }
)

