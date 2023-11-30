
// 1. MUUTUJAD
//Muutuja on midagi, millele saate anda nime ja millele saate salvestada infot.
//See on nagu karbike, kuhu saate midagi panna ja hiljem seda karpi vaadata.

// Näide muutuja loomisest nimega "arv" 
var arv = 5;

// Nüüd on muutuja "arv" nagu karbike, kus sees on number 5

//Mõned viisid kuidas luua JavaScripti muutujaid:
var x = 10 //(1) see on vanem viis kuidas luua muutujaid kuid mõnes kohas siiani kasutatakse veel seda.

let nimi = "Remo"; //(2) Uuem variant, mida kasutatakse muutujate loomiseks, mis võivad muutuda.

const minuNumber = 10; //(3) Ka uuem variant, mida kasutatakse samuti muutujate loomiseks.
// Consti väärtust ei saa muuta.
// Siin tähendab const, et minuNumber on alati 10. Sa ei saa hiljem muuta minuNumber-i millekski muuks, nagu 15 või 20. See jääb alati 10-ks.
////Const//// const on nagu lubadus, et see asi, millele sa nime andsid, jääb muutumatuks. See on kasulik, kui sa oled kindel, et mingit väärtust ei tohiks kogu programmi käigus muuta.



// 2. ANDMETÜÜBID 
/**
 * ANDMETÜÜBID
 * String => "Tere"   =>    let tekst = "Tere";
 * Number => 43   =>        let  number = "17"; 
 * Boolean => true/false => let väärtus = true;
 * Array => ["string", 32, true, {}, []],  =>  let massiiv = [1, 2, 3, 4, 5];
 * Object => { key: "value", key2: "value2"}   =>  let objekt = { nimi: 'John', vanus: 30, töö: 'arendaja' };
 */



// 3. If-else (Conditionals)
// if-lause aitab sul teha otsuseid, sõltuvalt sellest, kas mõni tingimus on tõene või väär. Näiteks:

let arv = 10;

if (arv > 0) {
    console.log('See arv on positiivne');
} else {
    console.log('See arv ei ole positiivne');
}

/**
 * Kui arv on suurem kui null, siis käivitatakse esimene osa (if blokk) ja väljastatakse "See arv on positiivne".
 * Kui arv ei ole suurem kui null (ehk on null või negatiivne), siis käivitatakse teine osa (else blokk) 
 * ja väljastatakse "See arv ei ole positiivne".
 */



// 4. LOOPS
// Loopiga lood sa (tsüklid) mis on nagu korduvad toimingud, kus sa ütled arvutile: "Tee see asi mitu korda!"
// Tsüklid on nagu masinad, mis aitavad sul automaatselt asju korrata.
// Näiteks For-tsükkel:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// See tähendab: "Alusta nullist, tee midagi, suurenda arvu, korda seni kuni arv on väiksem kui 5."

// On ka olemas While-tsükkel: 

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// See tähendab: "Alusta nullist, tee midagi, suurenda arvu, jätka seni kuni arv on väiksem kui 5."



// 5. FUNKTSIOONID
// Funktsioon on koodiplokk mis täidab kindlat ülesannet.
// Mõtle nii, funktsioonile kui väiksele masinale, mis teeb midagi konkreetset, kui talle midagi öelda.
// Nagu näiteks:

// Funktsiooni defineerimine
function tervita(nimi) {
    console.log('Tere, ' + nimi + '!');
}

// Funktsiooni kutsumine
tervita('Remo'); // Väljund: Tere, Remo!

// See on nagu sul on masin nimega tervita, mis võtab sisse nime (nimi) ja teeb midagi selle nimel 
// – väljastab tervituse. Kui üt
led talle tervita('John'), siis masin teeb oma töö ja ütleb "Tere, John!".

// On olemas ka kahte viisi funktsioone: Üks on tavaline ja teine on noolefunktsioon. 

// Tavaline funktsioon korrutamisel
function ruut(x) {
    return x * x;
}

// Arrow funktsioon korrutamisel
let ruutNool = x => x * x;

// Või mõlemad funktsioonid liida ja liidaNooled teevad sama asja - liidavad kaks arvu, kuid arrow funktsioon pakub lühemat süntaksit.

// Tavaline funktsioon liitmisel
function liida(a, b) {
    return a + b;
}

// Arrow funktsioon liitmisel
let liidaNooled = (a, b) => a + b;


/**
 * Funktsioonid aitavad koodi organiseerida ja muudavad selle kasutamise lihtsaks.
 * Isiklikult soovitan Arrow funktsioonid on lühemad ja sageli selgemad, kui tegemist on lihtsate funktsioonidega.
 */

//Parameetrid
//Parameetrid võimaldavad sul muuta funktsiooni käitumist, andes talle erinevaid väärtusi iga kord, kui sa teda välja kutsud.
