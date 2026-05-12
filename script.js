
const child = "firstCategory (sconto 20%)";
const senior = "thirdCategory (sconto 40%)";
const standard = "secondCategory";



const prezzoAlKm = 0.21;
const scontoChild = 20;
const scontoSenior = 40;



let età = prompt("quanti anni hai?")
let KmDaPercorrere = prompt("quanti Km devi percorrere")
let prezzoLordo = (prezzoAlKm * KmDaPercorrere)

if (età < 18) {
   prezzoFinale = (prezzoLordo - (prezzoLordo * 0.2))

} else if (età > 65) {

    prezzoFinale = (prezzoLordo - (prezzoLordo * 0.4))
}



console.log("Età passeggero: " + età);
console.log("Km da percorrere: " + KmDaPercorrere);
console.log("Prezzo totale: " + prezzoFinale.toFixed(2) + "€");




