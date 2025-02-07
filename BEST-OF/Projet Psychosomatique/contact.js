const formContainer = document.getElementById("formContainer");
const userForm = document.getElementById("userForm");
const submitBtn = document.getElementById("submit");
const URLAPI = "http://localhost:3000/data";
const emailInput = document.getElementById("email");
const lastNameInput = document.getElementById("lastName");
const firstNameInput = document.getElementById("firstName");
const telInput = document.getElementById("tel");
const formErrorMessage = document.querySelector(".formErrorMessage");
const checkEmail = document.getElementById("checkEmail");
const checkLastName = document.getElementById("checkLastName");
const checkFirstName = document.getElementById("checkFirsttName");
const checkTel = document.getElementById("checkTel");
const modal = document.getElementById("modal")
const modalContent = document.getElementById("modal-content")

//Initialiser le formulaire
const resetBtn = document.getElementById("reset");
const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const age = document.getElementById("age");
const suggestions = document.getElementById("suggestions");

resetBtn.addEventListener("click", (functionReset) => {
  location.reload();
});

//fonction pour valider le champ NOM
lastNameInput.addEventListener("change", (functionCheckLastName) => {
  const lastNameInputValue = lastNameInput.value;
  const regExLastName = new RegExp(
    /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/
  );
  const resultat1 = regExLastName.test(lastNameInputValue);

  if (!resultat1) {
    checkLastName.style.visibility = "visible";
    lastNameInput.style.border = "4px solid #f28907";
  } else {
    checkLastName.style.visibility = "hidden";
    lastNameInput.style.border = "none";
  }
});

//fonction pour valider le champ PRENOM
firstNameInput.addEventListener("change", (functionCheckFirstName) => {
  const firstNameInputValue = firstNameInput.value;
  const regExFirstName = new RegExp(
    /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/
  );
  const resultat2 = regExFirstName.test(firstNameInputValue);

  if (!resultat2) {
    checkFirstName.style.visibility = "visible";
    firstNameInput.style.border = "4px solid #f28907";
  } else {
    checkFirstName.style.visibility = "hidden";
    firstNameInput.style.border = "none";
  }
});

//fonction pour valider le champ TEL
telInput.addEventListener("change", (functionCheckTel) => {
  const telInputValue = telInput.value;
  const regExTel = new RegExp(/^0\d{3}\/\d{2}\.\d{2}\.\d{2}$/);
  const resultat3 = regExTel.test(telInputValue);

  if (!resultat3) {
    checkTel.style.visibility = "visible";
    telInput.style.border = "4px solid #f28907";
  } else {
    checkTel.style.visibility = "hidden";
    telInput.style.border = "none";
  }
});

//fonction pour valider le champ EMAIL
emailInput.addEventListener("change", (functionCheckEmail) => {
  const emailInputValue = emailInput.value;
  const regExEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,6}$/i); //NE PAS METTRE DE "" autour de la REGEX
  const resultat4 = regExEmail.test(emailInputValue);

  if (!resultat4) {
    checkEmail.style.visibility = "visible";
    emailInput.style.border = "4px solid #f28907";
  } else {
    checkEmail.style.visibility = "hidden";
    emailInput.style.border = "none";
  }
});

//Soumettre le formulaire et envoyer les données dans le JSON local
submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = {
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    tel: document.getElementById("tel").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    suggestions: document.getElementById("suggestions").value,
  };

  if (
    firstNameInput.value !== "" &&
    lastNameInput.value !== "" &&
    emailInput.value !== ""
  ) {

    try {
      const res = await axios.post(URLAPI, formData);
      //Ouverture Modal au click sur submit 
      modal.style.display = "block";
    }


    catch (err) {
      throw new Error("Une erreur est survenue !");
    }

  }

  else {
    alert("Veuillez svp remplir tous les champs requis *");
  }






});

// pour que le fichier json reçoit bien les données qu'on lui envoie, il faut l'initialiser à
// {
//   "data": [

//   ]
// }
//Fermeture Modal au click sur l'écran
window.onclick = function (e) {
  console.log(e);
  if (e.target == modal) {
    modal.style.display = "none";

    setTimeout(() => {
      location.reload() //fonction pour recharger la page à la fin du code avec un Timeur pour vider le contenu du formulaire 1 sec apres la fermeture de la MODAL au click
    }, 1000);
    // location.href = "./accueil.html";

  }
}

//quand on ouvre la page HTML en liveserver (port 5500), à chaque SUBMIT le navigateur va d'office faire un REFRESH, donc vaut mieux ouvrir via le dossier

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