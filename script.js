
const child = "firstCategory (sconto 20%)";
const senior = "thirdCategory (sconto 40%)";
const standard = "secondCategory";


const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const prezzoAlKm = 0.21;
const scontoChild = 20;
const scontoSenior = 40;


function assegnaCategoria(età) {
    if (età < 18){
        return child;
    } else if (età >= 66) {
        return senior;
    } else {
        return standard;
    }
}

function identificaPrezzoBiglietto(km, età){

    let prezzoBase = km * prezzoAlKm;
    let prezzoFinale = prezzoBase;

    if (età < 18) {
        prezzoFinale = prezzoBase - (prezzoBase * scontoChild / 100);
    } else if (età >= 66) {
        prezzoFinale = prezzoBase - (prezzoBase * scontoSenior / 100);
    } 
        return prezzoFinale;
    
}

let etàUtente = getRand(5, 90);
let KmDaPercorrere = getRand(10, 500);

let categoriaOttenuta = assegnaCategoria(etàUtente);
let prezzoFinale = identificaPrezzoBiglietto(KmDaPercorrere, etàUtente);

console.log("Età passeggero: " + etàUtente);
console.log("Km da percorrere: " + KmDaPercorrere);
console.log("Categoria: " + categoriaOttenuta);
console.log("Prezzo totale: " + prezzoFinale.toFixed(2) + "€");




