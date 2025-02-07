const resume = document.getElementById("resume")
const author = document.getElementById("author")
const infos = document.getElementById("infos")

const resumeText = document.getElementById("resumeText")
const authorText = document.getElementById("authorText")
const infosText = document.getElementById("infosText")


resume.addEventListener("click", () => {
    resume.style.background = "rgb(13, 99, 202)";
    resume.style.height = "15%";
    resume.style.position = "relative";
    resume.style.top = "-15%";
    resumeText.style.display = "block";

    author.style.height = "10%"
    author.style.position = "relative"
    author.style.top = "-10%";

    infos.style.height = "10%"
    infos.style.position = "relative"
    infos.style.top = "-10%";

    authorText.style.display = "none";
    infosText.style.display = "none";

    infos.style.background = "white";
    author.style.background = "white";

})


author.addEventListener("click", () => {
    author.style.background = "rgb(13, 99, 202)"
    author.style.height = "15%";
    author.style.position = "relative";
    author.style.top = "-15%";
    authorText.style.display = "block";

    resume.style.height = "10%"
    resume.style.position = "relative"
    resume.style.top = "-10%";

    infos.style.height = "10%"
    infos.style.position = "relative"
    infos.style.top = "-10%";

    resumeText.style.display = "none";
    infosText.style.display = "none";

    infos.style.background = "white";
    resume.style.background = "white";

})

infos.addEventListener("click", () => {
    infos.style.background = "rgb(13, 99, 202)"
    infos.style.height = "15%";
    infos.style.position = "relative";
    infos.style.top = "-15%";
    infosText.style.display = "block";

    resume.style.height = "10%"
    resume.style.position = "relative"
    resume.style.top = "-10%";

    author.style.height = "10%"
    author.style.position = "relative"
    author.style.top = "-10%";

    authorText.style.display = "none";
    resumeText.style.display = "none";

    resume.style.background = "white";
    author.style.background = "white";

})



/*Fonction qui au click sur SEARCH affiche les infos API dans #APIresponse */

const searchBtn = document.getElementById("searchBtn")
const APIresponse = document.getElementById("APIresponse")

searchBtn.addEventListener("click", async () => {

    try {
        // const res = await axios.get(`https://openlibrary.org/search/authors.json?q=Anne%20Ancelin%20Schutzenberger`)
        const res = await axios.get('https://openlibrary.org/authors/OL5834079A/works.json')
        // APIresponse.textContent = `Durant sa carrière, l'auteur a abordé les thèmes suivants: ${res.data.docs[0].top_subjects} `
        APIresponse.innerHTML = `
        - ${res.data.entries[0].title} <br>
        - ${res.data.entries[1].title} <br>
        - ${res.data.entries[2].title} <br>
        - ${res.data.entries[3].title} `
        APIresponse.style.borderBottom = "2px solid #0d63ca"
    }

    catch (err) { alert("Une erreur est survenue, essayez encore!") }


})


//Fonction de la NAVBAR
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