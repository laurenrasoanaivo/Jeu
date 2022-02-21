
function game(){

    const prompt = require("prompt-sync")();
    let nombreDeJoueur = +prompt("Veuillez saisir le nombre de joueur : ");

    let table = [];
    let result = 0;
    let newTable = [];
    let otherTable = [];
    let otherTab = [];

    function aleatoire(min, max){
        return Math.floor(Math.random()* (max-min +1)) + min;
    }

    for(let i = 1; i <= nombreDeJoueur; i++){
        let name = prompt("Veuillez saisir le nom du joueur : ")
        table.push([name , 0]);
    }
    console.log(table);

    function ready(tab){

        for(let i = 0; i < tab.length; i++){

            for(let j = 0; j < 1; j++){
                console.log(`Pour le joueur "${tab[i][0]}" votre score est de ${tab[i][1]} il vous reste ${3-j}`);
                let ready = prompt("Joueur : ")

                if(ready == tab[i][0]){
                    result = aleatoire(1, 2)
                    console.log("Resultat : " + result);
                }
                else {
                    console.log("Le nom du joueur est incorrect");
                    break;
                }
                tab[i][1] += result;

            }

            newTable.push(tab[i][1]);
            
        }

        console.log(tab);
        console.log(newTable);

        let max = Math.max(...newTable)
        console.log(max);

        for(let x = 0; x < tab.length; x++){
            if(tab[x][1] == max)
                otherTable.push(1);
            else otherTable.push(0);
        }

        console.log(otherTable);

        for(let y = 0; y < otherTable.length; y++){
            if(otherTable[y] == 1)
                otherTab.push(1)
        }
        console.log(otherTab);

        if(otherTab.length == 1 || tab.length == 0){
            console.log(`Le gagnant est : "${tab[otherTable.indexOf(1)][0]}" avec le score de ${max}`);
        }
        else {
            for(let i = 0; i < tab.length; i++){
                if(tab[i][1] != max){
                    tab.splice(i, i+1)
                }
            }
            console.log(tab);
            ready(tab);
        }

    }
    ready(table);
}

game();