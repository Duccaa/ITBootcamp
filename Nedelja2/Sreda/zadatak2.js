{
    let cena = 8399;
    let budzet = 9000;
    if (budzet < cena) {
        console.log('Nemate dovoljno novca');
        console.log('Trenutno stanje:', budzet); 
    } else {
        console.log('Uspešno ste kupili proizvod');
        console.log('Trenutno stanje:', budzet - cena);
    }
}
