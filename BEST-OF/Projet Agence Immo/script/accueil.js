// MENU DEROULANT

let btn_menu = document.querySelector(".btn_menu")
let dropdownContent = document.querySelector(".dropdownContent")

btn_menu.addEventListener("click", () =>
{
  dropdownContent.classList.toggle("show");;
  $("#propertyImg").fadeToggle(500);
  }
)




/* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */

// function clickFunction () {
//   document.getElementById("dropdownMenu").classList.toggle("show");
// }


// // Close the dropdown menu if the user clicks on the 
// window.onclick = function(event) {
//   if (!event.target.matches(".dropbtn")) {
//     let dropdowns = document.querySelector(".dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//         let openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

