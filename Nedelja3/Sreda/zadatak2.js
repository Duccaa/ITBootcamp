// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function cenaPoKvadratnomCentimetru(r, cena) {
    if(r > 0 && cena > 0) {
        console.log(cena / (Math.pow(r, r) * Math.PI));
    } else {
        console.log('Neispravno uneti parametri')
    } 
}

cenaPoKvadratnomCentimetru(20, 800);
