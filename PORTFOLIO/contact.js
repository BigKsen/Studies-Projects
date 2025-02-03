document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour afficher ou masquer les détails du contact
  function toggleContactDetails(contactId) {
    const allContactDivs = document.querySelectorAll("[id$=_click]");
    allContactDivs.forEach((div) => {
      if (div.id !== `${contactId}_click`) {
        div.style.display = "none";
      }
    });

    const contactClickDiv = document.querySelector(`#${contactId}_click`);
    if (
      contactClickDiv.style.display === "none" ||
      !contactClickDiv.style.display
    ) {
      contactClickDiv.style.display = "block";
      contactClickDiv._hideTimeout = setTimeout(() => {
        contactClickDiv.style.display = "none";
      }, 7000); // 7 secondes
    } else {
      contactClickDiv.style.display = "none";
      clearTimeout(contactClickDiv._hideTimeout);
    }
  }

  // Gestion des clics sur chaque élément de contact
  document
    .getElementById("mail_contact")
    .addEventListener("click", function () {
      window.location.href = "mailto:ksenia.kozjanova@hotmail.com";
      toggleContactDetails("mail_contact");
    });

  document
    .getElementById("phone_contact")
    .addEventListener("click", function () {
      toggleContactDetails("phone_contact");
    });

  document
    .getElementById("linkedin_contact")
    .addEventListener("click", function () {
      toggleContactDetails("linkedin_contact");
    });

  document
    .getElementById("gitHub_contact")
    .addEventListener("click", function () {
      toggleContactDetails("gitHub_contact");
    });

  const curVitDiv = document.getElementById("curVit_contact");

  // Gérer le clic sur la div entière
  curVitDiv.addEventListener("click", function (event) {
    // Vérifier si l'utilisateur clique sur le lien ou ailleurs
    if (!event.target.closest("a")) {
      // Si ce n'est pas un clic sur le lien, afficher/masquer les détails
      event.preventDefault();
      toggleContactDetails("curVit_contact");
    }
  });

  // Gérer uniquement le clic sur le lien pour rediriger
  const curVitLink = curVitDiv.querySelector("a");
  curVitLink.addEventListener("click", function (event) {
    // Laisser le lien rediriger normalement
    event.stopPropagation(); // Empêche la propagation vers le parent
  });
});
