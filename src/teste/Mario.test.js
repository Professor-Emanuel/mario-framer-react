import Mario from '../entitati/Mario.js';

console.log("--- Rulare Test: Mario.js (Mișcare) ---");

const jucator = new Mario(0, 0);

// Îi dăm viteză manual (ca și cum am apăsa pe tastă)
jucator.viteza.seteaza(2, 0); 

// Executăm mișcarea
jucator.actualizeaza();

// Verificăm rezultatul
if (jucator.pozitie.x === 2) {
    console.log("***Test Mișcare Mario: SUCCES (Poziția X este 2)");
} else {
    console.error("***Test Mișcare Mario: EȘUAT! Poziția X este:", jucator.pozitie.x);
}

console.log("--- Test Finalizat ---");
