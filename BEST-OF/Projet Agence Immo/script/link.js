// MENU DEROULANT

let btn_menu = document.querySelector(".btn_menu")
let dropdownContent = document.querySelector(".dropdownContent")

btn_menu.addEventListener("click", () =>
{
  dropdownContent.classList.toggle("show");;
  $("#propertyImg").fadeToggle(500);
  }
)


/* TOOGLE Q-R*/

$(document).ready(function () {
  $("#spanBuy").click(function(){
    $("#Q_Buy button").toggle(500);
  });
});

$(document).ready(function () {
  $("#spanRent").click(function(){
    $("#Q_Rent button").toggle(500);
  });
});



$(document).ready(function(){
  $("#btn1").click(function(){
    $("#p1").toggle(1000);
  });
});

$(document).ready(function(){
  $("#btn2").click(function(){
    $("#p2").toggle(1000);
  });
});

$(document).ready(function(){
  $("#btn3").click(function(){
    $("#p3").toggle(1000);
  });
});

$(document).ready(function(){
  $("#btn4").click(function(){
    $("#p4").toggle(1000);
  });
});

$(document).ready(function(){
  $("#btn5").click(function(){
    $("#p5").toggle(1000);
  });
});

$(document).ready(function(){
  $("#btn6").click(function(){
    $("#p6").toggle(1000);
  });
});