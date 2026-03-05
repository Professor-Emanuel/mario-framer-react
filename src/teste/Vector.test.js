/**
 * Test unitar pentru clasa Vector.
 * Verifică integritatea operațiilor matematice de bază.
 */
import Vector from '../matematica/Vector.js';

console.log("--- Rulare Teste: Vector.js ---");

const pozitie = new Vector(10, 20);
const viteza = new Vector(5, -2);

// Test 1: Verificare Adăugare (Cinematică)
pozitie.adauga(viteza);
if (pozitie.x === 15 && pozitie.y === 18) {
    console.log("***Test Adăugare: SUCCES (15, 18)");
} else {
    console.error("***Test Adăugare: EȘUAT! Rezultat:", pozitie.x, pozitie.y);
}

// Test 2: Verificare Multiplicare (Fricțiune/Accelerație)
pozitie.multiplica(2);
if (pozitie.x === 30 && pozitie.y === 36) {
    console.log("***Test Multiplicare: SUCCES (30, 36)");
} else {
    console.error("***Test Multiplicare: EȘUAT! Rezultat:", pozitie.x, pozitie.y);
}

// Test 3: Verificare Resetare (seteaza)
pozitie.seteaza(100, 200);
if (pozitie.x === 100 && pozitie.y === 200) {
    console.log("***Test Setează: SUCCES (100, 200)");
} else {
    console.error("***Test Setează: EȘUAT!");
}

console.log("--- Teste Finalizate ---");
