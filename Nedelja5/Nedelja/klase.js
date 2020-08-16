// Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.
// Osnovne klase koje treba implementirati (sa njihovim poljima):
// Čovek: ime, prezime, godina rođenja
// Student: trenutna godina studija, trenutni prosek
//      Student osnovnih studija: smer osnovnih studija
//      Student master studija: smer master studija
// Zaposleni: godina zaposlenja, plata
// Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
//      Profesor: titula (docent, vanredni, redovni)
//      Asistent: smer doktorskih studija
// Službenik: odsek

class Covek {
    constructor(ime, prezime, godinaRodjenja) {
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
    ispis() {
        return
    }
}

class Student extends Covek {
    constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek) {
        super(ime, prezime, godinaRodjenja)
        this.godinaStudija = godinaStudija
        this.prosek = prosek
    }
}

class StudentOS extends Student {
    constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek, smerOS) {
        super(ime, prezime, godinaRodjenja, godinaStudija, prosek)
        this.smerOS = smerOS 
    }
    ispis() {
        return `Student osnovnih studija: ${this.ime} ${this.prezime}, godina rodjenja: ${this.godinaRodjenja}, trenutna godina osnovnih studija: ${this.godinaStudija}, prosek: ${this.prosek}, smer: ${this.smerOS}`
    }
}

class StudentMA extends Student {
    constructor (ime, prezime, godinaRodjenja, godinaStudija, prosek, smerMA) {
        super(ime, prezime, godinaRodjenja, godinaStudija, prosek)
        this.smerMA = smerMA
    }
    ispis() {
        return `Student master studija: ${this.ime} ${this.prezime}, godina rodjenja: ${this.godinaRodjenja}, trenutna godina master studija: ${this.godinaStudija}, prosek: ${this.prosek}, smer: ${this.smerMA}`
    }
}

class Zaposleni extends Covek {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata) {
        super(ime, prezime, godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

class Nastavnik extends Zaposleni {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta) {
        super(ime, prezime, godinaRodjenja,godinaZaposlenja, plata )
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}

class Profesor extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula) {
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.titula = titula
    }
    ispis() {
        return `Profesor: ${this.ime} ${this.prezime}, titula: ${this.titula}, godina rodjenja: ${this.godinaRodjenja}, godina zaposlenja: ${this.godinaZaposlenja}, plata: ${this.plata} RSD, predmeti na kojima predaje: ${this.listaPredmeta}, omiljeni predmet: ${this.omiljeniPredmet}`
    }
}
class Asistent extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerDS) {
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.smerDS = smerDS
    }
    ispis() {
        return `Asistent: ${this.ime} ${this.prezime}, smer doktorskih studija: ${this.smerDS}, godina rodjenja: ${this.godinaRodjenja}, godina zaposlenja: ${this.godinaZaposlenja}, plata: ${this.plata} RSD, predmeti na kojima predaje: ${this.listaPredmeta}, omiljeni predmet: ${this.omiljeniPredmet}`
    } 
}    

class Sluzbenik extends Zaposleni {
    constructor (ime, prezime, godinaRodjenja, godinaZaposlenja, plata, odsek) {
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata,)
        this.odsek = odsek
    }
    ispis() {
        return `Sluzbenik: ${this.ime} ${this.prezime}, odsek: ${this.odsek}, godina rodjenja: ${this.godinaRodjenja}, godina zaposlenja: ${this.godinaZaposlenja}, plata: ${this.plata} RSD`
    } 
}

let predmeti = ['Koncepti i fenomeni evropske umetnosti i vizuelne kulture 19. veka', 'Evropska umetnost novog veka', 'Teorijski koncepti umetnosti i vizuelne kulture novog veka', 'Umetnost i vizuelna kultura mediteranskog sveta']

osoba1 = new StudentOS('Janko', 'Jankovic', 1990, 'treca', 9.2, 'istorija umetnosti')
osoba2 = new StudentMA('Pera', 'Markovic', 1996, 'prva', 9.8, 'muzeologija')
osoba3 = new Profesor('Igor', 'Gajic', 1975, 2004, 120000, predmeti[0], predmeti, 'redovni profesor' )
osoba4 = new Asistent('Vuk', 'Dragic', 1988, 2018, 80000, predmeti[3], predmeti[1] + ', ' + predmeti[3], 'Umetnost novog veka')
osoba5 = new Sluzbenik('Marko', 'Peric', 1977, 2008, 60000, 'sekretarijat')

console.log(osoba1.ispis());
console.log(osoba2.ispis());
console.log(osoba3.ispis());
console.log(osoba4.ispis());
console.log(osoba5.ispis());
