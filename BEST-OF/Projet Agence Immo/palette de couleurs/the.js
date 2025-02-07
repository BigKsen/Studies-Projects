
// let houses = [
  
//     houseOne = {
//       id: "house1",
//       bedrooms: 3,
//       pc: 1070,
//       m2: 180,
//       price: 430000,
//       image: "./elements/localisationWhite.png",
//       text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//   },
  
//   houseTwo = {
//     id: "house2",
//     bedrooms: 2,
//     pc: 1080,
//     m2: 200,
//     price: 500000,
//     image: "./elements/menu.png",
//     text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
//   },

//   houseThree = {
//     id: "house3",
//     bedrooms: 5,
//     pc: 1080,
//     m2: 200,
//     price: 600000,
//     image: "./elements/menu.png",
//     text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
//   }

// ]



// // recuperer ma Div HTML  "houses" au moyen de son ID
// const DIV_HOUSES = document.getElementById("houses");

// // parcourir le tableau
// for (let housesTab of houses) {
//   console.log(housesTab);
// }

// // afficher un des elements du tableau au moyen de son index (dans ce cas element=objet)
// console.log(houses[0])


// // dans un tableau qui a comme elements = des objets: recuperer la valeur d'une des propriétés d'un des objets
// // console.log(myTab[objet-index].propriété-voulue)
// console.log(houses[0].bedrooms)

// //Fonction pour afficher un bien avec comme condition bedrooms >= 4

// if (houses[2].bedrooms >= 4) {
//   console.log(houseThree)
// }


// //Fonction pour afficher le(s) bien (les objets) correspondant à la condition déclarée (choix de l'utilisateur)
// let whichHouse = houses.find(x => x.price >= 450000);
// console.log(whichHouse)


// //Fonction pour inserer le résultat avec les objets affiché dans le HTML
// let resultat = document.createElement("div")
// resultat.
// DIV_HOUSES.innerHTML = resultat


//Si click trier par chambres:
//initialisation affichage sur none
// $( "section:contains('1 chambre')" ).css( "display", "none" );
// $( "section:contains('3 chambres')" ).css( "display", "none" );
// $( "section:contains('2 chambres')" ).css( "display", "none" );


// // si on a cliquer sur 3 chambres:
// $( "section:contains('1 chambre')" ).css( "display", "none");
// $( "section:contains('2 chambres')" ).css( "display", "none" );
// $( "section:contains('3 chambres')" ).css( "display", "" );


//Si click trier par CP:
//initialisation affichage sur none
// $( "section:contains('Anderlecht')" ).css( "display", "none" );
// $( "section:contains('Molenbeek')" ).css( "display", "none" );
// $( "section:contains('Forest')" ).css( "display", "none" );


// // si on a cliquer sur 1070:
// $( "section:contains('Forest')" ).css( "display", "none");
// $( "section:contains('Molenbeek')" ).css( "display", "none" );
// $( "section:contains('Anderlecht')" ).css( "display", "" );



//Si click trier par prix:

//initialisation affichage sur none
$( "section:contains('Anderlecht')" ).css( "display", "none" );
$( "section:contains('Molenbeek')" ).css( "display", "none" );
$( "section:contains('Forest')" ).css( "display", "none" );


$( "section:contains('Forest')" ).css( "display", "" );


