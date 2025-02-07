window.onload = function () {
  // Redirection pour le clic sur le drapeau français
  document.getElementById("fr_flag").addEventListener("click", function () {
    window.location.href = "cvFR.html";
  });

  // Redirection pour le clic sur le drapeau anglais
  document.getElementById("en_flag").addEventListener("click", function () {
    window.location.href = "cvEN.html";
  });

  document.getElementById("pdf_icon").addEventListener("click", function () {
    let cvElement = document.getElementById("cv_main");

    // Utilisation de html2canvas pour capturer l'élément avec son fond dégradé
    html2canvas(cvElement, {
      scale: 2,
      backgroundColor: null, // Ne pas définir un fond uni, conserver le fond CSS (dégradé)
      logging: true, // Activer les logs pour déboguer (facultatif)
    }).then((canvas) => {
      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jspdf.jsPDF("p", "mm", "a4");

      let imgWidth = 210; // Largeur en mm d'une page A4
      let pageHeight = 297; // Hauteur en mm d'une page A4
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Ajuster la hauteur de l'image pour qu'elle prenne toute la page A4
      if (imgHeight < pageHeight) {
        let scaleFactor = pageHeight / imgHeight; // Calculer le facteur d'échelle pour remplir la hauteur
        imgHeight = pageHeight;
        imgWidth = imgWidth * scaleFactor; // Réduire la largeur proportionnellement
      }

      // Ajouter l'image capturée à la première page du PDF
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

      // Ajouter des pages supplémentaires si nécessaire
      let heightLeft = imgHeight - pageHeight;

      while (heightLeft > 0) {
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("mon_cv.pdf");
    });
  });
};
