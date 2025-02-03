// Fonction qui gère l'apparence de la NAVBAR
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    // Retirer la classe 'clicked' de tous les liens
    document
      .querySelectorAll("a")
      .forEach((l) => l.classList.remove("clicked"));

    // Ajouter la classe 'clicked' uniquement au lien cliqué
    this.classList.add("clicked");
  });
});
