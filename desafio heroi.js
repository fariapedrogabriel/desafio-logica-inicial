let nomeHeroi = "Carlos";
let xpHeroi = 10001;

let nivel;

if ( xpHeroi < 1000 ){
    nivel = "ferro";  
} else if (xpHeroi > 1000 && xpHeroi <= 2000){
    nivel = "bronze"
} else if (xpHeroi > 2000 && xpHeroi <= 5000){
    nivel = "prata"
} else if (xpHeroi > 5000 && xpHeroi <= 7000){
    nivel = "ouro"
} else if (xpHeroi > 7000 && xpHeroi <= 8000){
    nivel = "platina"
} else if (xpHeroi > 8000 && xpHeroi <= 9000){
    nivel = "ascendente"
} else if (xpHeroi > 9000 && xpHeroi <= 10000){
    nivel = "imortal"
} else{
    nivel = "radiante"
}

console.log("Heroi de nome: " + nomeHeroi + " está no nível de: " + nivel + "!");