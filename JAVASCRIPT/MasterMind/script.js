// 1) Créer une fonction qui renvoie un tableau de 4 cases avec dans chacune des cases une valeur aléatoire entre:
// 	* "jaune"
//     * "bleu"
//     * "rouge
//     * "vert"
//     * "blanc"
//     * "noir"


const initColorsArray = ["jaune", "bleu", "rouge", "vert", "blanc", "noir"]


function fillTab4Colors() {
    const tab4Colors = [];

    for (let i = 0; i < 4; i++) {
        const randomNbr = initColorsArray[Math.floor(Math.random() * initColorsArray.length)]
        // le randomNbr doit être à l'intérieure de la boucle pour générer une nouvelle couleur à chaque tour de boucle
        tab4Colors.push(randomNbr)
    }

    return tab4Colors
}

// const computerGame = fillTab4Colors();
// console.log(computerGame);




// 2) Créer une fonction qui prend en paramètre deux tableaux et renvoie le nombres d'éléments similaires à la même position
// ex: ["vert", "jaune", "rouge", "noir"]
// comparé à["rouge", "jaune", "vert", "rouge"]
// donnera 1(jaune)

// const tab1 = ["vert", "jaune", "rouge", "noir"]
// const tab2 = ["rouge", "jaune", "vert", "rouge"]

// Ci-dessous les params ont des noms choisis au hasard et ne se rapportent pas aux Tab1 et Tab2
function compare2TabsSamePositionElem(array1, array2) {
    let nbOfElementsAtSamePos = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {

            nbOfElementsAtSamePos++
        }
    }
    return nbOfElementsAtSamePos
}

// const computerGame2 = compare2TabsSamePositionElem(tab1, tab2)
// console.log(computerGame2)

// ici la constante computerGame2 est = à notre fonction à qui on va passer en param nos tableaux 1 et 2 (ou autres si nécessaires)


// 3) Créer une fonction qui prend en paramètre deux tableaux et renvoie le nombres d'éléments similaires mal placés
// ex: ["vert", "jaune", "rouge", "noir"]
// comparé à["rouge", "jaune", "vert", "rouge"]
// donnera 2(vert et rouge)



//joueur
//const tabl1 = ["vert", "jaune", "rouge", "noir"]

//ordinateur
//const tabl2 = ["rouge", "jaune", "vert", "rouge"]

function compare2TabsSameElemWrongPosition(arrayy1, arrayy2) {

    let nbofElementsWrongPosition = 0

    const set1 = new Set(arrayy1)
    const set2 = new Set(arrayy2)

    for (let elem of set1) {
        let index1 = arrayy1.indexOf(elem)
        let index2 = arrayy2.indexOf(elem)

        if (set2.has(elem) && index1 !== index2) {
            nbofElementsWrongPosition++
        }

    }
    return nbofElementsWrongPosition
}
// const computerGame3 = compare2TabsSameElemWrongPosition(tabl1, tabl2)
// console.log(computerGame3)




// 4) Et voilà, vous avez toutes les bases pour créer un mastermind:)
// A) "L'ordi" génère un tableau aléatoire(voir 1)
// B) Le joueur peut générer une combinaison(méthode de votre choix, des select + bouton valider, click sur un button pour le changer de couleurs + valider etc)(il créé un tableau de 4 cases avec les couleurs de son choix)
// C) On affiche autant de rond rouge que d'éléments bien placés et autant de rond blancs que d'éléments mal placés
// D) Le joueur à droit à 12 propositions
// E) Si tous les éléments sont bien placés c'est qu'il a trouvé:)


// JEU

//Recup données
let computerChoice = document.getElementById("computerChoice")
let userPlay = document.getElementById("userPlay")
let playBtn = document.getElementById("play")
let resetBtn = document.getElementById("reset")
let validateBtn = document.getElementById("validate")
let new_chanceBtn = document.getElementById("new_chance")
let red_flags = document.getElementById("red_flags")
let white_flags = document.getElementById("white_flags")
let chances = document.getElementById("chances")
let qChances = document.getElementById("qChances")


// construction VISUEL





// Fonction VIDER TOUT au chargement de la page
window.addEventListener(("load"), () => {
    computerChoice.textContent = ""
    userPlay.textContent = ""
    red_flags.textContent = ""
    white_flags.textContent = ""
})



// Fonction bouton PLAY
playBtn.addEventListener(("click"), () => {
    startGame()
})

// Fonction START GAME
function startGame() {
    computerChoice.innerText = fillTab4Colors()
}
startGame()

//Fonction bouton RESET 
resetBtn.addEventListener(("click"), () => {
    computerChoice.textContent = ""
    userPlay.value = ""
    red_flags.textContent = ""
    white_flags.textContent = ""
})


// Fonction COMPARAISON
validateBtn.addEventListener(("click"), () => {

    //récuperer les valeurs de INPUT
    console.log(userPlay.value)

    // convertir le input en tableau
    let stringToConvert = (userPlay.value)
    let stringToTab = stringToConvert.split(" ")
    console.log(stringToTab)


    //convertir le choix de computer en tableau
    console.log(computerChoice.innerText)
    let stringToConvert2 = computerChoice.innerText
    let stringToTab2 = stringToConvert2.split(",")
    console.log(stringToTab2)


    //comparer les 2 tableaux
    const resultRedFlags = compare2TabsSamePositionElem(stringToTab, stringToTab2)
    console.log(resultRedFlags)

    const resultWhiteFlags = compare2TabsSameElemWrongPosition(stringToTab, stringToTab2)
    console.log(resultWhiteFlags)

    // afficher le resultat dans le HTML

    red_flags.textContent = resultRedFlags
    if (resultRedFlags === 4) {
        red_flags.textContent = ""
        white_flags.textContent = ""
        computerChoice.textContent = ""
        userPlay.value = "Congratulations WINNER !"
        qChances.textContent = "12"
    }

    white_flags.textContent = resultWhiteFlags
})


new_chanceBtn.addEventListener(("click"), () => {

    if ((qChances.innerText) > 0) {
        qChances.textContent = (parseInt(qChances.textContent)) - 1
        red_flags.textContent = ""
        white_flags.textContent = ""
        userPlay.value = ""
    }


    else {
        red_flags.textContent = ""
        white_flags.textContent = ""
        computerChoice.textContent = ""
        userPlay.value = "Game Over !"
        chances.innerHTML = ""

    }
})

