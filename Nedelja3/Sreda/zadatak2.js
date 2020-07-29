// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function cenaPoKvadratnomCentimetru(r, cena) {
    console.log(Math.pow(r, r) * Math.PI / cena);
}

cenaPoKvadratnomCentimetru(20, 900);