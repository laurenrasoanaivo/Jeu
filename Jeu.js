// Jeu de dés en multi-joueur

function game(){

    // Demander le nombre de joueur
    const prompt = require("prompt-sync")();
    let nombreDeJoueur = +prompt("Veuillez saisir le nombre de joueur : ");

    let table = [];
    let result = 0;
    let newTable = [];

    function aleatoire(min, max){
        return Math.floor(Math.random()* (max-min +1)) + min;
    }

    // Ajouter tous les joueurs et leurs score initiale 0 dans un tableau "table"
    for(let i = 1; i <= nombreDeJoueur; i++){
        let name = prompt("Veuillez saisir le nom du joueur : ")
        table.push([name , 0]);
    }
    console.log(table);

    // Commencer la partie
    function ready(tab){

        for(let i = 0; i < tab.length; i++){

            for(let j = 0; j < 1; j++){
                // Un message qui rappel le joueur qui est en train de jouer, son score actuel et le nombre de tour restant
                console.log(`Pour le joueur "${tab[i][0]}" votre score est de ${tab[i][1]} il vous reste ${3-j}`);
                // Saisir le nom du joueur
                let ready = prompt("Joueur : ")
                // Si le nom saisie est correct le dés se lance en valeur aléatoire de 1 à 6
                if(ready == tab[i][0]){
                    result = aleatoire(1, 2)
                    console.log("Resultat : " + result);
                }
                // Sinon le joueur perd un tour
                else {
                    console.log("Le nom du joueur est incorrect");
                    break;
                }
                // Remplace le score initial 0 de chaque joueur au resultat obtenu
                tab[i][1] += result;
            }

            // Ajouter le resultat de tous les joueur dans un nouveu tableau "newTable"
            newTable.push(tab[i][1]);
            
        }

        console.log(tab);

        // Chercher le score max dans newTable
        let max = Math.max(...newTable)

        // Supprime tous les joueur qui n'ont pas eu le score max
        for(let x = 0; x < tab.length; x++){
            if(tab[x][1] != max)
                tab.splice(x, 1)
        }
        console.log(tab);

        // Si un seul joueur a eu le score max, on annonce le gagnant
        if(tab.length == 1){
            console.log(`Le gagnant est : "${tab[0][0]}" avec le score de ${max}`);
        }
        // Sinon tous les joueurs qui ont eu le score max recommence la partie avec score initial max
        else {
            ready(tab);
        }

    }
    ready(table);
}

game();
