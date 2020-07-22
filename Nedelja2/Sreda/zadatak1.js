{
    let a = 5; b = 8;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(Math.pow(a ,b));
}

// zadatak sa časa
// napisati program koji za unete parametre računa i ispiše obim i površinu sledećih figura:
// pravougaonik 
{
    let a = -3;
    let b = 8;
    if(a >= 0 && b >= 0) {
        let O = 2 * a + 2 * b; P = a * b;
        console.log('Obim pravougaonika iznosi:', O, ',','Površina pravougaonika iznosi:', P);
    } else {
        console.log('Neispavno uneti parametri.');
        console.log('Zadata vrednost mora biti veća od ili jednaka 0.');
    }
}
// kvadrat
{
    let a = 3;
    if(a >= 0) {
        let O = 4 * a; P = a * a;
        console.log('Obim kvadrata iznosi:', O, ',','Površina kvadrata iznosi:', P);
    } else {
        console.log('Neispavno uneti parametri.');
        console.log('Zadata vrednost mora biti veća od ili jednaka 0.');
    }
}