// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

// function cenaPoKvadratnomCentimetru(r, cena) {
//     if(r > 0 && cena > 0) {
//         console.log(cena / (Math.pow(r, 2) * Math.PI));
//     } else {
//         console.log('Neispravno uneti parametri')
//     } 
// }

function cenaPoKvadratnomCentimetru(r, cena) {
    r > 0 && cena > 0 ?
    console.log(cena / (Math.pow(r, 2) * Math.PI))
    :
    console.log('Neispravno uneti parametri')
}
cenaPoKvadratnomCentimetru(20, 800);