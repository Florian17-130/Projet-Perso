
// --- PARTIE 1 : AJOUTER DES EXERCICES --- //

let btnAdd = document.querySelector("#btnAdd");
let inputExo = document.querySelector("#exerciceInput");
let liste = document.querySelector("#listeExercices");
let btnVider = document.querySelector("#btnVider");
let inputPoids = document.querySelector("#poidsInput");
let inputReps = document.querySelector("#repsInput");
let toutLesChamps = [inputExo, inputPoids, inputReps];
let selectMuscle = document.querySelector("#muscleSelect");

btnAdd.addEventListener("click", function() {
     // On récupère les 3 valeurs
    let nom = inputExo.value.trim();
    let poids = inputPoids.value.trim();
    let reps = inputReps.value.trim();
    let muscle = selectMuscle.value;

    // CONDITION : Si le nom OU le poids OU les réps est vide
    if (nom === "" || poids === "" || reps === "" || muscle === "") {
        // On affiche l'alerte et on arrête tout
        alert("⚠️ Merci de remplir tous les champs (Exercice, Poids, Répétitions et muscle) !");
        
        } else {
        // SINON : Tout est rempli, on peut ajouter l'exercice
        let li = document.createElement("li");

        // On définit une couleur selon le muscle
        let couleur = "#ccc"; // Gris par défaut
        if (muscle === "Pectoraux") couleur = "#ff4757"; // Rouge
        if (muscle === "Bras") couleur = "#ffa502";      // Orange
        if (muscle === "Epaules") couleur = "#1e90ff";   // Bleu
        if (muscle === "Abdos") couleur = "#eccc68";     // Jaune
        if (muscle === "Dos") couleur = "#033091";       // Noir/Gris foncé
        if (muscle === "Jambes") couleur = "#2ed573";    // Vert

        // Affichage : Nom / Muscle / Kg / Reps avec une petite pastille de couleur pour le muscle
        li.innerHTML = `
        <span style="border-left: 5px solid ${couleur}; padding-left: 10px;">
            <strong>${nom}</strong> (${muscle}) : ${poids}kg / ${reps} reps
        </span>
        `;

        // Cliquer sur l'exo pour le barrer (fini)
        li.addEventListener("click", function() {
            li.classList.toggle("fait");
        });

        // Supprimer l'exo avec un double clic
        li.addEventListener("dblclick", function() {
            li.remove();
        });

        liste.appendChild(li);

        // On vide les cases pour la suite
        inputExo.value = "";
        inputPoids.value = "";
        inputReps.value = "";
        inputExo.focus(); // On se remet sur la première case
    }
});
        btnVider.addEventListener("click", function() {
        
        // On demande confirmation pour éviter les erreurs
        if (confirm("Voulez-vous vraiment supprimer tout les exercices ?")) {
            liste.innerHTML = ""; // On efface tout ce qu'il y a dans le <ul>
        }
    });

        // On écoute le clavier sur toute la page
        document.addEventListener("keydown", function(evenement) {
        // Si la touche est Entrée
        if (evenement.key === "Enter") {
        // On vérifie si on est bien en train de taper dans un de nos 3 champs
        const champActif = document.activeElement;
        const idsAutorises = ["exerciceInput", "poidsInput", "repsInput"];
        if (idsAutorises.includes(champActif.id)) {
        // On empêche le comportement par défaut (évite les bugs)
        evenement.preventDefault();
        // On déclenche l'ajout
        btnAdd.click();
        }
    }
});



// --- PARTIE 2 : LE TIMER DE REPOS --- //

let btnRepos = document.querySelector("#btnRepos");
let display = document.querySelector("#timerDisplay");
let TempsRestant = 60;
let chronometre; // Variable pour stocker l'intervalle
let inputRepos = document.querySelector("#inputRepos");
let sonAlerte = new Audio("bip.mp3");

btnRepos.addEventListener("click", function() {
    // On réinitialise à 60 secondes
    TempsRestant = 60;
    display.textContent = TempsRestant;

    // On efface un éventuel chrono déjà lancé
    clearInterval(chronometre);

    // On lance le décompte
    chronometre = setInterval(function() {
        TempsRestant--;
        display.textContent = TempsRestant;

        if (TempsRestant <= 0) {
            clearInterval(chronometre);
            alert("Repos terminé ! Au boulot !");
            display.textContent = "60";
        }
    }, 1000);
});

    btnRepos.addEventListener("click", function() {

        // 1. On récupère la valeur de l'input au moment du clic
        TempsRestant = Number(inputRepos.value);

        // Si l'utilisateur n'a rien mis ou mis 0, on met 60 par défaut
        if (TempsRestant <= 0) TempsRestant = 60;
    
        display.textContent = TempsRestant;
    
        clearInterval(chronometre);

        chronometre = setInterval(function() {
            TempsRestant--;
            display.textContent = TempsRestant;

        if (TempsRestant <= 0) {
            clearInterval(chronometre);

            sonAlerte.play(); // On joue le son d'alerte fin temps de repos

            alert("Repos terminé !");
            display.textContent = inputRepos.value; // On remet la valeur choisie
        }
    }, 1000);
});