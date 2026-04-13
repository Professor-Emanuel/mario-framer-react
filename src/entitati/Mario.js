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
        
        // --- TODO Student: (Gravitația ca forță) ---
        // Definește o proprietate 'this.gravitatie' care să fie un Vector.
        // Gândește-te: pe ce axă trebuie să tragă gravitația și cu ce intensitate?
        // Hint: În Canvas, coordonatele Y cresc de sus în jos.
    }
    
    // Metoda pentru calculul logicii (mișcare, fizică)
    actualizeaza() {
    	// Aici vom adăuga forțele (gravitație, accelerație) în pasul următor
    	// --- TODO Student: (Accelerarea vitezei) ---
        // Înainte de a mișca personajul, viteza lui trebuie să fie influențată de gravitație.
        // Folosește metoda .adauga() a vectorului viteză pentru a include gravitația.
    	
        // Aplicăm vectorul de viteză asupra poziției
        this.pozitie.adauga(this.viteza);
        
        // --- TODO Student: (Podeaua simbolică) ---
        // Dacă nu punem o limită, Mario va cădea la infinit prin ecran.
        // Scrie o condiție (if) care să verifice dacă this.pozitie.y depășește o anumită valoare (ex: 200).
        // Dacă o depășește, resetează poziția la 200 și oprește viteza pe Y.
    }
    
    sari() {
        // --- TODO Student: (Impulsul de săritură) ---
        // Săritura este opusul gravitației. Trebuie să modifici componenta 'y' a vitezei
        // cu o valoare negativă (ca să propulsezi personajul în sus).
        // Experimentează cu valori între -5 și -15.
    }

    // Metoda pentru afișarea vizuală pe ecran
    deseneaza(context) {
        context.fillStyle = 'red'; // Culoarea de prototip
        // Desenăm un pătrat de 32x32 pixeli la poziția curentă
        context.fillRect(this.pozitie.x, this.pozitie.y, 32, 32);
    }
}
