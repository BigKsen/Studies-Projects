// -------------------------------------------------------------------
// SET LA LOCALE EN FRANCAIS
dayjs.locale("fr")



// -----------------------------JOURS------------------------------------



// EXEMPLES DE FORMAT

// console.log(dayjs().month(2).format('DD ~ MM ~ YYYY'));
// console.log(dayjs().day().format(dddd))
// console.log(dayjs().month()); // get : attention, ça reste mois -1
// console.log(dayjs().month(2).format()); // set : //
// console.log(dayjs().add(1, "day").format());
// console.log(dayjs().subtract(1, "month").format());

// -------------------------------------------------------------------

//RECUPERER JOUR PAR JOUR
let lundi = document.getElementById("lundi")
let mardi = document.getElementById("mardi")
let mercredi = document.getElementById("mercredi")
let jeudi = document.getElementById("jeudi")
let vendredi = document.getElementById("vendredi")
let samedi = document.getElementById("samedi")
let dimanche = document.getElementById("dimanche");

//OU RECUPERE TOUT LE TABLEAU EN 1 FOIS
const weekdays = document.querySelectorAll(".weekday");

// -------------------------------------------------------------------

// REMPLACER LE TEXTE HTML PAR LA FORMULE SOUHAITEE DE dayJS

// lundi.textContent = (dayjs().day(1).format("dddd"))
// mardi.textContent = (dayjs().day(2).format("dddd"))
// mercredi.textContent = (dayjs().day(3).format("dddd"))
// jeudi.textContent = (dayjs().day(4).format("dddd"))
// vendredi.textContent = (dayjs().day(5).format("dddd"))
// samedi.textContent = (dayjs().day(6).format("dddd"))
// dimanche.textContent = (dayjs().day(7).format("dddd"))


// OU FAIRE UNE BOUCLE: soit BOUCLE forEach, soit BOUCLE for, soit BOUCLE while: dans le cas présente la boucle forEach est la + appropriée


//forEach
//BOUCLE UTILE SI ON SAIT COMBIEN DE FOIS ON DOIT REPETER LA BOUCLE et on veut RECUP ELEM + Index
weekdays.forEach((th, index) => {
    th.textContent = dayjs().day(index + 1).format("dddd")
})


//for
// for (let index = 0; index < weekdays.length; index++) {
//     weekdays[index].textContent = dayjs().day(index + 1).format("dddd")
// }


// While
//BOUCLE UTILE pour un JEU: le boucle sera stoppé par une action du joueur
// let index = 0;
// while (index < weekdays.length) {
//     weekdays[index].textContent = dayjs().day(index + 1).format("dddd")
//     index++;
// }


// -----------------------------DATES------------------------------------

// REMPLACER LE TEXTE HTML PAR LA FORMULE SOUHAITEE DE dayJS


//RECUPERER JOUR PAR SEMAINE
// let week1 = document.getElementById("week1")
// let week2 = document.getElementById("week2")
// let week3 = document.getElementById("week3")
// let week4 = document.getElementById("week4")


//OU RECUPERE TOUT LE TABLEAU EN 1 FOIS
const weeks = document.querySelectorAll(".weeks");


// -------------------------------------------------------------------


//REMPLACER LE TEXTE HTML PAR LA FORMULE SOUHAITEE DE dayJS
// week1.innerHTML = dayjs("2024-06-01").format("DD/MM/YYYY") + "<br> - <br>" + dayjs("2024-06-01").add(6, "day").format("DD/MM/YYYY");
// week2.innerHTML = dayjs("2024-06-08").format("DD/MM/YYYY") + "<br> - <br>" + dayjs("2024-06-08").add(6, "day").format("DD/MM/YYYY");
// week3.innerHTML = dayjs("2024-06-15").format("DD/MM/YYYY") + "<br> - <br>" + dayjs("2024-06-15").add(6, "day").format("DD/MM/YYYY")
// week4.innerHTML = dayjs("2024-06-22").format("DD/MM/YYYY") + "<br> - <br>" + dayjs("2024-06-22").add(6, "day").format("DD/MM/YYYY")


// OU FAIRE UNE BOUCLE: soit BOUCLE forEach, soit BOUCLE for, soit BOUCLE while: dans le cas présente la boucle forEach est la + appropriée

let currentdate = dayjs("2024-06-01")
weeks.forEach((th, index) => {
    th.innerHTML = currentdate.format("DD/MM/YYYY") + "<br> - <br>"
    currentdate = currentdate.add(6, "day")
    th.innerHTML += currentdate.format("DD/MM/YYYY")
    currentdate = currentdate.add(1, "day")
})

// -------------------------------------------------------------------
