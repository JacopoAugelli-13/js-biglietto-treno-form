
const prezzoAlKm = 0.21;
const scontoChild = 20;
const scontoSenior = 40;

const Name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const Età = document.querySelector('.età');
const Km = document.querySelector('.km');


let button = document.querySelector('#calcolatore');
button.addEventListener('click', () => {
    let prezzoFinale;
    let eta = Età.valueAsNumber;
    let KmDaPercorrere = Km.valueAsNumber;
    let prezzoLordo = (prezzoAlKm * KmDaPercorrere)

    if (eta < 18) {
        prezzoFinale = (prezzoLordo - (prezzoLordo * 0.2));

    } else if (eta > 65) {

        prezzoFinale = (prezzoLordo - (prezzoLordo * 0.4));
    } else {

        prezzoFinale = prezzoLordo;
    }

    let risultato = document.getElementById('risultato')
    risultato.innerHTML = prezzoFinale + "€";
    console.log("Età passeggero: " + eta);
    console.log("Km da percorrere: " + KmDaPercorrere);
    console.log("Prezzo totale: " + prezzoFinale.toFixed(2) + "€");
})




