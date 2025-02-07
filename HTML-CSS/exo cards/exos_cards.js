// On récupère tous nos éléments nécessaires à la gestion de la fonction "mélanger"

let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let shuffle= document.getElementById("shuffle")



// On créé un tableau avec le JS

let monTableau = [card1, card2, card3]
let resultat



// on créé un écouteur d'événement sur shuffle
//+
//on créé une boucle pour(chaque ELEMENT de mon TABLEAU)
//+
// la boucle va créer un nombre aléatoire pour chaque éléments de mon tableau (si on teste avec console.log)
//resultat = math.floor arrondir nombre en dessous pour en faire un entier(nombre random() * la longueur de mon tableau(* 2 ou autre : pas obligatoire mais créé plus de possibilités de changement d'ordre))
//+
// on va classer les elements aléatoires par ordre croissant "chaque element.style.order"

shuffle.addEventListener("click", () => {

    for(const card of monTableau)
    {
        resultat = Math.floor(Math.random() * monTableau.length * 2);
        card.style.order = resultat;
    }
})

// Math.random() -> 0 -> 0.9999999 (Math Random est toujours un nombre entre 0 et 0.99999999)
// Math.random() * 2 -> 0 -> 2.99999 (si on ne multiplie pas le random par la longueur du tableau, le dernier élément ne sera jamais compris et on risque de tomber 2 fois sur la meme valeur alors 2 elements auront la meme valeur et ne sembleront pas changer de place au click)
// Math.random() * length -> 0 -> 3.999999 (ok pour inclure le dernier element )
// Math.random() * length * 2 -> 0 -> 5.999999 (donner + de possibilité de triage)