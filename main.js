document.getElementById("calculate").addEventListener("click", function() {
    // variable declaré pour obtenir les data venant du front
    const budget = parseFloat(document.getElementById("budget").value);
    const name = document.getElementById("name").value;
    const nbrperson = document.getElementById("nbrperson").value;
    const nbrjour = document.getElementById("nbrjour").value;
    const transport = parseFloat(document.getElementById("transport").value);
    const hebergement = parseFloat(document.getElementById("hebergement").value);
    const repas = parseFloat(document.getElementById("repas").value);
    //fin declation variabe

    if (isNaN(budget) || isNaN(transport) || isNaN(hebergement) || isNaN(repas) || isNaN(nbrperson) ) { //si les budget, transport, hergement, repas sont null
        var emoji = String.fromCodePoint(0x1F606)
        document.getElementById("result").textContent += emoji; //insertion de l'emojie dans le message
        document.getElementById("result").innerText += "Merci de bien remplir les champs"; //alors ce message s'affiche
    } else {
        const nb = transport + hebergement + repas; //calcul du dépense
        const nbdep = nbrperson * nb; //budget total
        const dep = nbdep * nbrjour;
        const reste = budget - dep; //calcul du reste de budget
        
        if (reste >= 0) { //si le reste est supèrieur à 0
            document.querySelector("h4").style.color="green" //alors couleur texte vert
            var emoji = String.fromCodePoint(0x1F606)
            document.getElementById("result").textContent += emoji;//emojie sourante
            document.getElementById("result").innerText += `Bonjour  ${name} \n`;//afficher le nom saisie
            document.getElementById("result").innerText += `Vous êtes:  ${nbrperson} personne(s) \n`;//afficher le nombre de personne
            document.getElementById("result").innerText += `Durée de séjours:  ${nbrjour} jours(s) \n`;//afficher le nombre de personne
            document.getElementById("result").innerText += `Budget total : ${dep.toFixed(2)} ar \n`; // afficher le budget total
            document.getElementById("result").innerText += `Budget restant : ${reste.toFixed(2)} ar`; // afficher le buget restant

            document.getElementById("budget").value = "";
            document.getElementById("name").value = "";
            document.getElementById("nbrperson").value = "1";
            document.getElementById("nbrjour").value = "1";
            document.getElementById("transport").value = "";
            document.getElementById("hebergement").value = "";
            document.getElementById("repas").value = "";
        } else { //si non
           document.querySelector("h4").style.color="red" //couleur texte route
           var emoji = String.fromCodePoint(0x1F62D)
           document.getElementById("result").textContent += emoji; //afficher emojie triste
           document.getElementById("result").innerText += "Attention ! Vous avez dépassé votre budget. \n"; //une alerte mentionnant que le budget est dépassé
           document.getElementById("result").innerText += `Depassé : ${reste.toFixed(2)} ar`; //le montant dépassé
        }
    }
});
