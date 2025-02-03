const list = [
    "ANGLE", "ARMOIRE", "BANC", "BUREAU", "CABINET", "CARREAU", "CHAISE", "CLASSE", "CLEF", "COIN", "COULOIR", "DOSSIER", "EAU", "ECOLE", "ENTRER", "ESCALIER", "ETAGERE", "EXTERIEUR", "FENETRE", "INTERIEUR", "LAVABO", "LIT", "MARCHE", "MATELAS", "MATERNELLE", "MEUBLE", "MOUSSE", "MUR", "PELUCHE", "PLACARD", "PLAFOND", "PORTE", "POUBELLE", "RADIATEUR", "RAMPE", "RIDEAU", "ROBINET", "SALLE", "SALON", "SERRURE", "SERVIETTE", "SIEGE", "SIESTE", "SILENCE", "SOL", "SOMMEIL", "SONNETTE", "SORTIE", "TABLE", "TABLEAU", "TABOURET", "TAPIS", "TIROIR", "TOILETTE", "VITRE", "ALLER", "AMENER", "APPORTER", "APPUYER", "ATTENDRE", "BAILLER", "COUCHER", "DORMIR", "ECLAIRER", "EMMENER", "EMPORTER", "ENTRER", "FERMER", "FRAPPER", "INSTALLER", "LEVER", "OUVRIR", "PRESSER", "RECHAUFFER", "RESTER", "SONNER", "SORTIR", "VENIR", "ABSENT", "ASSIS", "BAS", "HAUT", "PRESENT", "GAUCHE", "DROITE", "DEBOUT", "DEDANS", "DEHORS", "FACE", "LOIN", "PRES", "TARD", "TOT", "APRES", "AVANT", "CONTRE", "DANS", "DE", "DERRIERE", "DEVANT", "DU", "SOUS", "SUR", "CRAYON", "STYLO", "FEUTRE", "MINE", "GOMME", "DESSIN", "COLORIAGE", "RAYURE", "PEINTURE", "PINCEAU", "COULEUR", "CRAIE", "PAPIER", "FEUILLE", "CAHIER", "CARNET", "CARTON", "CISEAUX", "DECOUPAGE", "PLIAGE", "PLI", "COLLE", "AFFAIRE", "BOITE", "CASIER", "CAISSE", "TROUSSE", "CARTABLE", "JEU", "JOUET", "PION", "DOMINO", "PUZZLE", "CUBE", "PERLE", "CHOSE", "FORME", "CARRE", "ROND", "PATE", "MODELER", "TAMPON", "LIVRE", "HISTOIRE", "BIBLIOTHEQUE", "IMAGE", "ALBUM", "TITRE", "CONTE", "DICTIONNAIRE", "MAGAZINE", "CATALOGUE", "PAGE", "LIGNE", "MOT", "ENVELOPPE", "ETIQUETTE", "CARTE", "APPEL", "AFFICHE", "ALPHABET", "APPAREIL", "CAMESCOPE", "CASSETTE", "CHAINE", "CHANSON", "CHIFFRE", "CONTRAIRE", "DIFFERENCE", "DOIGT", "ECRAN", "ECRITURE", "FILM", "FOIS", "FOI", "IDEE", "INSTRUMENT", "INTRUS", "LETTRE", "LISTE", "MAGNETOSCOPE", "MAIN", "MICRO", "MODELE", "MUSIQUE", "NOM", "NOMBRE", "ORCHESTRE", "ORDINATEUR", "PHOTO", "POINT", "POSTER", "POUCE", "PRENOM", "QUESTION", "RADIO", "SENS", "TAMBOUR", "TELECOMMANDE", "TELEPHONE", "TELEVISION", "TRAIT", "TROMPETTE", "VOIX", "XYLOPHONE", "ZERO", "CHANTER", "CHERCHER", "CHOISIR", "CHUCHOTER", "COLLER", "COLORIER", "COMMENCER", "COMPARER", "COMPTER", "CONSTRUIRE", "CONTINUER", "COPIER", "COUPER", "DECHIRER", "DECOLLER", "DECORER", "DECOUPER", "DEMOLIR", "DESSINER", "DIRE", "DISCUTER", "ECOUTER", "ECRIRE", "EFFACER", "ENTENDRE", "ENTOURER", "ENVOYER", "FAIRE", "FINIR", "FOUILLER", "GOUTER", "IMITER", "LAISSER", "LIRE", "METTRE", "MONTRER", "OUVRIR", "PARLER", "PEINDRE", "PLIER", "POSER", "PRENDRE", "PREPARER", "RANGER", "RECITER", "RECOMMENCER", "REGARDER", "REMETTRE", "REPETER", "REPONDRE", "SENTIR", "SOULIGNER", "TAILLER", "TENIR", "TERMINER", "TOUCHER", "TRAVAILLER", "TRIER", "AMI", "ATTENTION", "CAMARADE", "COLERE", "COPAIN", "COQUIN", "DAME", "DIRECTEUR", "DIRECTRICE", "DROIT", "EFFORT", "ELEVE", "ENFANT", "FATIGUE", "FAUTE", "FILLE", "GARCON", "GARDIEN", "MADAME", "MAITRE", "MAITRESSE", "MENSONGE", "ORDRE", "PERSONNE", "RETARD", "JOUEUR", "SOURIRE", "TRAVAIL", "AIDER", "DEFENDRE", "DESOBEIR", "DISTRIBUER", "ECHANGER", "EXPLIQUER", "GRONDER", "OBEIR", "OBLIGER", "PARTAGER", "PRETER", "PRIVER", "PROMETTRE", "PROGRES", "PROGRESSER", "PUNIR", "QUITTER", "RACONTER", "EXPLIQUER", "REFUSER", "SEPARER", "BLOND", "BRUN", "CALME", "CURIEUX", "DIFFERENT", "DOUX", "ENERVER", "GENTIL", "GRAND", "HANDICAPE", "INSEPARABLE", "JALOUX", "MOYEN", "MUET", "NOIR", "NOUVEAU", "PETIT", "POLI", "PROPRE", "ROUX", "SAGE", "SALE", "SERIEUX", "SOURD", "TRANQUILLE", "ARROSOIR", "ASSIETTE", "BALLE", "BATEAU", "BOITE", "BOUCHON", "BOUTEILLE", "BULLES", "CANARD", "CASSEROLE", "CUILLERE", "CUVETTE", "DOUCHE", "ENTONNOIR", "GOUTTES", "LITRE", "MOULIN", "PLUIE", "POISSON", "PONT", "POT", "ROUE", "SAC", "PLASTIQUE", "SALADIER", "SEAU", "TABLIER", "TASSE", "TROUS", "VERRE", "AGITER", "AMUSER", "ARROSER", "ATTRAPER", "AVANCER", "BAIGNER", "BARBOTER", "BOUCHER", "BOUGER", "DEBORDER", "DOUCHER", "ECLABOUSSER", "ESSUYER", "ENVOYER", "COULER", "PARTIR", "FLOTTER", "GONFLER", "INONDER", "JOUER", "LAVER", "MELANGER", "MOUILLER", "NAGER", "PLEUVOIR", "PLONGER", "POUSSER", "POUVOIR", "PRESSER", "RECEVOIR", "REMPLIR", "RENVERSER", "SECHER", "SERRER", "SOUFFLER", "TIRER", "TOURNER", "TREMPER", "VERSER", "VIDER", "VOULOIR", "AMUSANT", "CHAUD", "FROID", "HUMIDE", "INTERESSANT", "MOUILLE", "SEC", "TRANSPARENT", "MOITIE", "AUTANT", "BEAUCOUP", "ENCORE", "MOINS", "PEU", "PLUS", "TROP", "ANORAK", "ARC", "BAGAGE", "BAGUETTE", "BARBE", "BONNET", "BOTTE", "BOUTON", "BRETELLE", "CAGOULE", "CASQUE", "CASQUETTE", "CEINTURE", "CHAPEAU", "CHAUSSETTE", "CHAUSSON", "CHAUSSURE", "CHEMISE", "CIGARETTE", "COL", "COLLANT", "COURONNE", "CRAVATE", "CULOTTE", "ECHARPE", "EPEE", "FEE", "FLECHE", "FUSIL", "GANT", "HABIT", "JEAN", "JUPE", "LACET", "LAINE", "LINGE", "LUNETTES", "MAGICIEN", "MAGIE", "MAILLOT", "MANCHE", "MANTEAU", "MOUCHOIR", "MOUFLE", "NOEUD", "PAIRE", "PANTALON", "PIED", "POCHE", "PRINCE", "PYJAMA", "REINE", "ROBE", "ROI", "RUBAN", "SEMELLE", "SOLDAT", "SORCIERE", "TACHE", "TAILLE", "TALON", "TISSU", "TRICOT", "UNIFORME", "VALISE", "VESTE", "VETEMENT", "CHANGER", "CHAUSSER", "COUVRIR", "DEGUISER", "DESHABILLER", "ENLEVER", "HABILLER", "LACER", "PORTER", "RESSEMBLER", "CLAIR", "COURT", "ETROIT", "FONCE", "JOLI", "LARGE", "LONG", "MULTICOLORE", "NU", "USE", "BIEN", "MAL", "MIEUX", "PRESQUE", "AIGUILLE", "AMPOULE", "AVION", "BOIS", "BOUT", "BRICOLAGE", "BRUIT", "CABANE", "CARTON", "CLOU", "COLLE", "CROCHET", "ELASTIQUE", "FICELLE", "FIL", "MARIONNETTE", "MARTEAU", "METAL", "METRE", "MORCEAU", "MOTEUR", "OBJET", "OUTIL", "PEINTURE", "PINCEAU", "PLANCHE", "PLATRE", "SCIE", "TOURNEVIS", "VIS", "VOITURE", "ARRACHER", "ATTACHER", "CASSER", "COUDRE", "DETRUIRE", "ECORCHER", "ENFILER", "ENFONCER", "FABRIQUER", "MESURER", "PERCER", "PINCER", "REPARER", "REUSSIR", "SERVIR", "TAPER", "TROUER", "TROUVER", "ADROIT", "DIFFICILE", "DUR", "FACILE", "LISSE", "MALADROIT", "POINTU", "TORDU", "ACCIDENT", "AEROPORT", "CAMION", "ENGIN", "FEU", "FREIN", "FUSEE", "GARAGE", "GARE", "GRUE", "HELICOPTERE", "MOTO", "PANNE", "PARKING", "PILOTE", "PNEU", "QUAI", "TRAIN", "VIRAGE", "VITESSE", "VOYAGE", "WAGON", "ZIGZAG", "ARRETER", "ATTERRIR", "BOUDER", "CHARGER", "CONDUIRE", "DEMARRER", "DISPARAITRE", "DONNER", "ECRASER", "ENVOLER", "GARDER", "GARER", "MANQUER", "PARTIR", "POSER", "RECULER", "ROULER", "TENDRE", "TRANSPORTER", "VOLER", "ABIME", "ANCIEN", "BLANC", "BLEU", "CASSE", "CINQ", "DERNIER", "DEUX", "DEUXIEME", "DIX", "GRIS", "GROS", "HUIT", "JAUNE", "MEME", "NEUF", "PAREIL", "PREMIER", "QUATRE", "ROUGE", "SEPT", "SEUL", "SIX", "SOLIDE", "TROIS", "TROISIEME", "UN", "VERT", "DESSUS", "AUTOUR", "VITE", "VERS", "ACROBATE", "ARRET", "ARRIERE", "BARRE", "BARREAU", "BORD", "BRAS", "CERCEAU", "CHAISE", "CHEVILLE", "CHUTE", "COEUR", "CORDE", "CORPS", "COTE", "COU", "COUDE", "CUISSE", "DANGER", "DOIGTS", "DOS", "ECHASSES", "ECHELLE", "EPAULE", "EQUIPE", "ESCABEAU", "FESSE", "FILET", "FOND", "GENOU", "GYMNASTIQUE", "HANCHE", "JAMBE", "JEU", "MAINS", "MILIEU", "MONTAGNE", "MUR", "ESCALADE", "MUSCLE", "NUMERO", "ONGLE", "PARCOURS", "PAS", "PASSERELLE", "PENTE", "PEUR", "PIED", "PLONGEOIR", "POIGNET", "POING", "PONT", "SIGNE", "SINGE", "POUTRE", "EQUILIBRE", "PRISE", "RIVIERE", "CROCODILE", "ROULADE", "PIROUETTE", "SAUT", "SERPENT", "SPORT", "SUIVANT", "TETE", "TOBOGGAN", "TOUR", "TRAMPOLINE", "TUNNEL", "VENTRE", "ACCROCHER", "APPUYER", "ARRIVER", "BAISSER", "BALANCER", "BONDIR", "BOUSCULER", "COGNER", "COURIR", "DANSER", "DEPASSER", "DESCENDRE", "ECARTER", "ESCALADER", "GAGNER", "GENER", "GLISSER", "GRIMPER", "MARCHER", "PATTES", "DEBOUT", "MONTER", "MONTRER", "PENCHER", "PERCHER", "PERDRE", "RAMPER", "RATER", "REMPLACER", "RESPIRER", "RETOURNER", "REVENIR", "SAUTER", "SOULEVER", "SUIVRE", "TOMBER", "TRANSPIRER", "TRAVERSER", "DANGEUREUX", "EPAIS", "FORT", "GROUPE", "IMMOBILE", "ROND", "SERRE", "SOUPLE", "ENSEMBLE", "ICI", "JAMAIS", "TOUJOURS", "SOUVENT", "BAGARRE", "BALANCOIRE", "BALLON", "BANDE", "BICYCLETTE", "BILLE", "CAGE", "ECUREUIL", "CERF", "VOLANT", "CHATEAU", "COUP", "COUR", "COURSE", "ECHASSE", "FLAQUE", "EAU", "PAIX", "PARDON", "PARTIE", "PEDALE", "PELLE", "POMPE", "PREAU", "RAQUETTE", "RAYON", "RECREATION", "SABLE", "SIFFLET", "SIGNE", "TAS", "TRICYCLE", "TUYAU", "VELO", "FILE", "RANG", "BAGARRER", "BATTRE", "CACHER", "CRACHER", "CREUSER", "CRIER", "DEGONFLER", "DISPUTE", "EMPECHER", "GALOPER", "HURLER", "JONGLER", "LANCER", "PEDALER", "PLAINDRE", "PLEURER", "POURSUIVRE", "PROTEGER", "SAIGNER", "SALIR", "SIFFLER", "SURVEILLER", "TRAINER", "TROUVER", "FOU", "MECHANT"
];

let start = document.getElementById("start")
let word = document.getElementById("word")
let attempts_span = document.getElementById("attempts_span")
let h_0 = document.getElementById("h_0")
let reset = document.getElementById("reset")
let score_span = document.getElementById("score_span")

start.addEventListener("click", () => {
    let pickedupWord = list[Math.floor(Math.random() * list.length)];
    let x = replaceLetters(pickedupWord)
    console.log(x)
    word.innerText = x
    let innerSpacedWord = addSpaces(x)
    console.log(innerSpacedWord)
    word.innerText = innerSpacedWord
    console.log(pickedupWord)
    attempts_span.innerText = "7"



    // fonction qui remplace toutes les lettres du mot aléatoire par des tirets
    function replaceLetters(pickedupWord) {
        let pattern = /[a-zA-Z]/g
        let replacement = pickedupWord.replace(pattern, "_")
        return (replacement)
    }

    //fonction qui ajoute un espace entre chaque tiret
    function addSpaces(x) {
        let spacedWord = x.replace(/(.)/g, '$1 ')
        return (spacedWord)
    }


    //Fonction qui verifie que le input ne contient que des lettres et vide le champ de saisi si ce n'est pas le cas
    let user_input = document.getElementById("user_input")
    let validate = document.getElementById("validate")


    validate.addEventListener("click", function (event) {
        let inputValue = user_input.value.toUpperCase()
        let lettersOnly = /^[a-zA-Z]$/
        if (!lettersOnly.test(inputValue)) {
            alert("LETTERS only & 1 letter at a time please !")
            user_input.value = inputValue.replace(/[^a-zA-Z]/g, "");
        }
        // Fonction qui verifie si la lettre choisie par l'utilisateur est conenue dans le mot
        //si c'est la cas => message de felicitations+vider le input + afficher la lettre à la place du tiret
        else if (pickedupWord.includes(inputValue)) {
            alert("BRAVO! Cette lettre se trouve bien dans le mot recherché")
            user_input.value = ""
            word.innerText = pickedupWord //Comment definir la bonne position de la lettre devinée?
            // rejouer la boucle pour une nouvelle tentative?
            // quand toutes les lettres trouvees : clear le input, phrase finale BRAVO, score final +1, break
        }



        else {
            alert("RATEEEEE! cette lettre ne se trouve pas dans le mot") //message RATE
            user_input.value = "" //clear input
            attempts_span.textContent-- // tentatives : -1
            h_0.src = "./images/Hangman-1.png"
            //comment rejouer la boucle?
            // pour changer les images on fait soit un tableau soit on fait correspondre les nombres des images au nombre des tentatives
        }




    }
        // if (attempts_span.textContent<=0){
        //     alert("PERDU");
        //     user_input.value = "" ;
        //     h_0.src="./images/Hangman-6.png"

        // }    


    )
})


reset.addEventListener("click", () => {
    h_0.src = "./images/Hangman-0.png"
    user_input.value = ""
    attempts_span.innerText = "7"
    word.innerText = ""
    score_span = "0"
})


//pour l'historique des parties:
//-creer 2 div: parties gagnées et parties perdues
//- les incrémenter chacune en fonction si perdu ou gagné
//MAIS
//si on rafraichit la page on perd le nombres des parties gagnées/perdues
//ALORS ==> local.storage

//si on relance la partie => compter comme perdu:
