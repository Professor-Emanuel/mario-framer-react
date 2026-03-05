import Vector from '../matematica/Vector.js';

/**
 * Clasă definită de utilizator pentru gestionarea stării și reprezentării personajului Mario.
 * Aceasta stă la baza simulării fizice și randării entității în universul jocului.
 * Vrem ca Mario să aibă două proprietăți fundamentale: o poziție și o viteză. 
 * Chiar dacă inițial stă pe loc, viteza lui inițială este un vector cu $(0, 0)$.
 */
export default class Mario {
    constructor(x, y) {
        // Inițializăm poziția folosind coordonatele primite
        this.pozitie = new Vector(x, y);
        
        // Inițializăm viteza cu zero (Mario stă pe loc la început)
        this.viteza = new Vector(0, 0);
    }
    
    // Metoda pentru calculul logicii (mișcare, fizică)
    actualizeaza() {
    	// Aici vom adăuga forțele (gravitație, accelerație) în pasul următor
    	
        // Aplicăm vectorul de viteză asupra poziției
        this.pozitie.adauga(this.viteza);
    }

    // Metoda pentru afișarea vizuală pe ecran
    deseneaza(context) {
        context.fillStyle = 'red'; // Culoarea de prototip
        // Desenăm un pătrat de 32x32 pixeli la poziția curentă
        context.fillRect(this.pozitie.x, this.pozitie.y, 32, 32);
    }
}
