
// MENU DEROULANT

let btn_menu = document.querySelector(".btn_menu")
let dropdownContent = document.querySelector(".dropdownContent")

btn_menu.addEventListener("click", () =>
{
  dropdownContent.classList.toggle("show");;
  $("#propertyImg").fadeToggle(500);
  }
)



// recup les elements du HTML:

let chambres2 = document.getElementById("2_chambres")
let chambres3 = document.getElementById("3_chambres")
let chambres4 = document.getElementById("4_chambres")
let anderlecht = document.getElementById("Anderlecht")
let forest = document.getElementById("Forest")
let saint_gilles = document.getElementById("Saint-Gilles")
let price1=document.getElementById("price1")
let price2=document.getElementById("price2")
let price3=document.getElementById("price3")
let m1=document.getElementById("m1")
let m2=document.getElementById("m2")
let reset = document.getElementById("reset")


//_______________________
 
let loc_1_chambres = document.getElementById("loc_1_chambres")
let loc_2_chambres = document.getElementById("loc_2_chambres")
let loc_3_chambres = document.getElementById("loc_3_chambres")

let loc_Anderlecht = document.getElementById("loc_Anderlecht")
let loc_Forest = document.getElementById("loc_Forest")
let loc_Saint_Gilles = document.getElementById("loc_Saint_Gilles")
let loc_Uccle = document.getElementById("loc_Uccle")

let loc_m1 = document.getElementById("loc_m1")
let loc_m2 = document.getElementById("loc_m2")

let loc_reset = document.getElementById("loc_reset")



//_____________________________________________


let uccle = document.getElementById("Uccle")

let house1 = document.getElementById("house1")
let houses_sale = document.querySelector(".houses_sale")
let more_text = document.querySelector(".more_text")
let middle = document.querySelector(".middle")

let house2 = document.getElementById("house2")
let houses_sale2 = document.querySelector(".houses_sale2")
let more_text2 = document.querySelector(".more_text2")
let middle2 = document.querySelector(".middle2")

let house3 = document.getElementById("house3")
let houses_sale3 = document.querySelector(".houses_sale3")
let more_text3 = document.querySelector(".more_text3")
let middle3 = document.querySelector(".middle3")

let house4 = document.getElementById("house4")
let houses_sale4 = document.querySelector(".houses_sale4")
let more_text4 = document.querySelector(".more_text4")
let middle4 = document.querySelector(".middle4")

let house5 = document.getElementById("house5")
let houses_sale5 = document.querySelector(".houses_sale5")
let more_text5 = document.querySelector(".more_text5")
let middle5 = document.querySelector(".middle5")

let house6 = document.getElementById("house6")
let houses_sale6 = document.querySelector(".houses_sale6")
let more_text6 = document.querySelector(".more_text6")
let middle6 = document.querySelector(".middle6")

let house7 = document.getElementById("house7")
let houses_sale7 = document.querySelector(".houses_sale7")
let more_text7 = document.querySelector(".more_text7")
let middle7 = document.querySelector(".middle7")

let house8 = document.getElementById("house8")
let houses_sale8 = document.querySelector(".houses_sale8")
let more_text8 = document.querySelector(".more_text8")
let middle8 = document.querySelector(".middle8")

let house9 = document.getElementById("house9")
let houses_sale9 = document.querySelector(".houses_sale9")
let more_text9 = document.querySelector(".more_text9")
let middle9 = document.querySelector(".middle9")

let house10 = document.getElementById("house10")
let houses_sale10 = document.querySelector(".houses_sale10")
let more_text10 = document.querySelector(".more_text10")
let middle10 = document.querySelector(".middle10")

let house11 = document.getElementById("house11")
let houses_sale11 = document.querySelector(".houses_sale11")
let more_text11 = document.querySelector(".more_text11")
let middle11 = document.querySelector(".middle11")

let house12 = document.getElementById("house12")
let houses_sale12 = document.querySelector(".houses_sale12")
let more_text12 = document.querySelector(".more_text12")
let middle12 = document.querySelector(".middle12")

// BIENS EN VENTE

//TRIER PAR CHAMBRES:

//initialisation affichage sur none

$( "section:contains('2 chambres')" ).css( "display", "none" );
$( "section:contains('3 chambres')" ).css( "display", "none" );
$( "section:contains('4 chambres')" ).css( "display", "none" );

// si click 2 chambres:

chambres2.addEventListener("click", () =>
{
    $("section:contains('2 chambres')").css("display", "")
}
)


// si click 3 chambres:

chambres3.addEventListener("click", () =>
{
    $("section:contains('3 chambres')").css("display", "")
}
)


// si click 4 chambres:

chambres4.addEventListener("click", () =>
{
    $("section:contains('4 chambres')").css("display", "")
}
)



//TRIER PAR Commune:

//initialisation affichage sur none

$( "section:contains('Anderlecht')" ).css( "display", "none" );
$( "section:contains('Forest')" ).css( "display", "none" );
$( "section:contains('Saint-Gilles')" ).css( "display", "none" );
$( "section:contains('Uccle')" ).css( "display", "none" );


// si click Anderlecht:

anderlecht.addEventListener("click", () =>
{
    $("section:contains('Anderlecht')").css("display", "")
}
)


// si click Forest:

forest.addEventListener("click", () =>
{
    $("section:contains('Forest')").css("display", "")
}
)


// si click Saint-Gilles:

saint_gilles.addEventListener("click", () =>
{
    $("section:contains('Saint-Gilles')").css("display", "")
}
)

// si click Uccle:

uccle.addEventListener("click", () =>
{
    $("section:contains('Uccle')").css("display", "")
}
)

//TRIER PAR PRIX:

//initialisation affichage sur none

$( "section:contains('price1')" ).css( "display", "none" );
$( "section:contains('price2')" ).css( "display", "none" );
$( "section:contains('price3')" ).css( "display", "none" );


// si click price1:

price1.addEventListener("click", () =>
{
    $("section:contains('300.000 euros'), section:contains('350.000 euros')").css("display", "")
}
)


// si click price2:

price2.addEventListener("click", () =>
{
    $("section:contains('300.000 euros'),section:contains('350.000 euros'), section:contains('380.000 euros')").css("display", "")
}
)


// si click price3:

price3.addEventListener("click", () =>
{
    $("section:contains('400.000 euros'), section:contains('450.000 euros'), section:contains('480.000 euros')").css("display", "")
}
)


//TRIER PAR SUPERFICIE:

//initialisation affichage sur none

$( "section:contains('m1')" ).css( "display", "none" );
$( "section:contains('m2')" ).css( "display", "none" );
$( "section:contains('m3')" ).css( "display", "none" );


// si click m1:

m1.addEventListener("click", () =>
{
    $("section:contains('200m²'), section:contains('150m²'), section:contains('160m²'), section:contains('180m²')").css("display", "")
}
)


// si click m2:

m2.addEventListener("click", () =>
{
    $("section:contains('200m²'), section:contains('220m²')").css("display", "")
}
)


// Bouton Reset pour toutes les checkbox

reset.addEventListener("click",()=>
{ $('input[type=checkbox]').each(function() 
{ this.checked = false;})
$( "section:contains('2 chambres')" ).css( "display", "none" )
$( "section:contains('3 chambres')" ).css( "display", "none" )
$("section:contains('4 chambres')").css("display", "none")
})

//________________________________________

// BIENS EN LOCATION

//TRIER PAR CHAMBRES:

//initialisation affichage sur none

$( "section:contains('chambres:1')" ).css( "display", "none" );
$( "section:contains('chambres:2')" ).css( "display", "none" );
$( "section:contains('chambres:3')" ).css( "display", "none" );

// si click 1 chambre:

loc_1_chambres.addEventListener("click", () =>
{
    $("section:contains('chambres:1')").css("display", "")
}
)

// si click 2 chambres:

loc_2_chambres.addEventListener("click", () =>
{
    $("section:contains('chambres:2')").css("display", "")
}
)


// si click 3 chambres:

loc_3_chambres.addEventListener("click", () =>
{
    $("section:contains('chambres:3')").css("display", "")
}
)



//TRIER PAR Commune:

//initialisation affichage sur none

$( "section:contains('zone: 1070')" ).css( "display", "none" );
$( "section:contains('zone: 1190')" ).css( "display", "none" );
$( "section:contains('zone: 1060')" ).css( "display", "none" );
$( "section:contains('zone: 1180')" ).css( "display", "none" );


// si click Anderlecht:

loc_Anderlecht.addEventListener("click", () =>
{
    $("section:contains('zone: 1070')").css("display", "")
}
)


// si click Forest:

loc_Forest.addEventListener("click", () =>
{
    $("section:contains('zone: 1190')").css("display", "")
}
)


// si click Saint-Gilles:

loc_Saint_Gilles.addEventListener("click", () =>
{
    $("section:contains('zone: 1060')").css("display", "")
}
)

// si click Uccle:

loc_Uccle.addEventListener("click", () =>
{
    $("section:contains('zone: 1180')").css("display", "")
}
)

//TRIER PAR PRIX:

//initialisation affichage sur none

$( "section:contains('loc_price1')" ).css( "display", "none" );
$( "section:contains('loc_price2')" ).css( "display", "none" );


// si click loc_price1:

loc_price1.addEventListener("click", () =>
{
    $("section:contains('850 euros'), section:contains('950 euros')").css("display", "")
}
)


// si click loc_price2.:

loc_price2.addEventListener("click", () =>
{
    $("section:contains('1100 euros'),section:contains('1200 euros'), section:contains('1350 euros')").css("display", "")
}
)


//TRIER PAR SUPERFICIE:

//initialisation affichage sur none

$( "section:contains('loc_m1')" ).css( "display", "none" );
$( "section:contains('loc_m2')" ).css( "display", "none" );


// si click m1:

loc_m1.addEventListener("click", () =>
{
    $("section:contains('55m2'), section:contains('70m2'), section:contains('90m²'), section:contains('95m2'), section:contains('100m2')").css("display", "")
}
)


// si click m2:

loc_m2.addEventListener("click", () =>
{
    $("section:contains('100m2'), section:contains('150m2')").css("display", "")
}
)




// Bouton Reset pour toutes les checkbox LOCATION

loc_reset.addEventListener("click",()=>
{ $('input[type=checkbox]').each(function() 
{ this.checked = false;})
$( "section:contains('chambres:1')" ).css( "display", "none" )
$( "section:contains('chambres:2')" ).css( "display", "none" )
$( "section:contains('chambres:3')" ).css( "display", "none" )
})



// EVENT LISTENER modal "mouseover" "mouseout"

houses_sale.addEventListener("mouseover", ()=>{
    middle.style.display = "block";
    middle.style.opacity= 1;
})

houses_sale.addEventListener("mouseout", ()=>{
    middle.style.display = "none"; 

})


houses_sale2.addEventListener("mouseover", ()=>{
    middle2.style.display = "block";
    middle2.style.opacity= 1;
})

houses_sale2.addEventListener("mouseout", ()=>{
    middle2.style.display = "none"; 

})


houses_sale3.addEventListener("mouseover", ()=>{
    middle3.style.display = "block";
    middle3.style.opacity= 1;
})

houses_sale3.addEventListener("mouseout", ()=>{
    middle3.style.display = "none"; 

})


houses_sale4.addEventListener("mouseover", ()=>{
    middle4.style.display = "block";
    middle4.style.opacity= 1;
})

houses_sale4.addEventListener("mouseout", ()=>{
    middle4.style.display = "none"; 

})

houses_sale5.addEventListener("mouseover", ()=>{
    middle5.style.display = "block";
    middle5.style.opacity= 1;
})

houses_sale5.addEventListener("mouseout", ()=>{
    middle5.style.display = "none"; 

})

houses_sale6.addEventListener("mouseover", ()=>{
    middle6.style.display = "block";
    middle6.style.opacity= 1;
})

houses_sale6.addEventListener("mouseout", ()=>{
    middle6.style.display = "none"; 

})


houses_sale7.addEventListener("mouseover", ()=>{
    middle7.style.display = "block";
    middle7.style.opacity= 1;
})

houses_sale7.addEventListener("mouseout", ()=>{
    middle7.style.display = "none"; 

})


houses_sale8.addEventListener("mouseover", ()=>{
    middle8.style.display = "block";
    middle8.style.opacity= 1;
})

houses_sale8.addEventListener("mouseout", ()=>{
    middle8.style.display = "none"; 

})


houses_sale9.addEventListener("mouseover", ()=>{
    middle9.style.display = "block";
    middle9.style.opacity= 1;
})

houses_sale9.addEventListener("mouseout", ()=>{
    middle9.style.display = "none"; 

})

houses_sale10.addEventListener("mouseover", ()=>{
    middle10.style.display = "block";
    middle10.style.opacity= 1;
})

houses_sale10.addEventListener("mouseout", ()=>{
    middle10.style.display = "none"; 

})

houses_sale11.addEventListener("mouseover", ()=>{
    middle11.style.display = "block";
    middle11.style.opacity= 1;
})

houses_sale11.addEventListener("mouseout", ()=>{
    middle11.style.display = "none"; 

})

houses_sale12.addEventListener("mouseover", ()=>{
    middle12.style.display = "block";
    middle12.style.opacity= 1;
})

houses_sale12.addEventListener("mouseout", ()=>{
    middle12.style.display = "none"; 

})