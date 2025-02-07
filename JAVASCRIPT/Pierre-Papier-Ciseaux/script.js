/* Recupération de données HTML*/

let heart = document.getElementById("heart")

/*partie ME*/
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let myScore = document.getElementById("myScore")
let cards = document.getElementById("cards")
let middle = document.getElementById("middle")
let middleH4 = document.getElementById("middleH4")
let me = document.getElementById("me")

/*partie COMPUTER*/
let rock2 = document.getElementById("rock2")
let paper2 = document.getElementById("paper2")
let scissors2 = document.getElementById("scissors2")
let question = document.getElementById("question")
let itsScore = document.getElementById("itsScore")
let cards2 = document.getElementById("cards2")
let computer = document.getElementById("computer")

/*partie FOOTER*/
let myGainSets = document.getElementById("myGainSets")
let itsGainSets = document.getElementById("itsGainSets")
let erase = document.getElementById("footerCase3")
let newGame = document.getElementById("footerCase2")

/*nombre alétoire côté COMPUTER*/

let computerTab = [rock2, paper2, scissors2]

rock.addEventListener("click", function () {
    paper.style.opacity = "0.2";
    scissors.style.opacity = "0.2";
    question.style.display = "none";

    let resultat = Math.floor(Math.random() * computerTab.length)

    for (const iaChoice of computerTab) {

        if (iaChoice === computerTab[resultat]) {
            iaChoice.style.display = "flex";
            if (iaChoice === rock2) {
                middleH4.innerText = "partie nulle"
            }

            else if (iaChoice === paper2) {
                middleH4.innerText = "tu as perdu"
                itsScore.textContent++ //ne pas initialiser le itsScore plus haut à 0 car il a été recupéré du HTML en tant qu'une chaine de caractères, il faut le garder tel quel ENSUITE il faut que itsScore ait une valeur de départ dans le HTML ex:0 ENSUITE on prend la chaine itsScore, on rentre dedans avec .textContent (on récupère donc la valeur initiale qui est 0 et on fait ++ dessus!)
            }

            else {
                middleH4.innerText = "tu as gagné"
                myScore.textContent++
            }
        }

        else {
            iaChoice.style.display = "none";
        }

        if (myScore.textContent >= 3) {
            middleH4.textContent = "Winner!"
            myGainSets.textContent++


            break
        }

        else if
            (itsScore.textContent >= 3) {
            middleH4.textContent = "Looser!"
            itsGainSets.textContent++
            break
        }



    }

})


erase.addEventListener("click", () => {
    myScore.textContent = "0"
    itsScore.textContent = "0"
    paper2.style.display = "none"
    rock2.style.display = "none"
    scissors2.style.display = "none"
    question.style.display = "flex"
    middleH4.textContent = "Cliquez sur une image pour jouer"
    paper.style.opacity = "1"
    scissors.style.opacity = "1"
    myGainSets.textContent = "0"
    itsGainSets.textContent = "0"
})


newGame.addEventListener("click", () => {
    myScore.textContent = "0"
    itsScore.textContent = "0"
    paper2.style.display = "none"
    rock2.style.display = "none"
    scissors2.style.display = "none"
    question.style.display = "flex"
    middleH4.textContent = "Cliquez sur une image pour jouer"
    paper.style.opacity = "1"
    scissors.style.opacity = "1"

})



