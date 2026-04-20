import React, { useRef, useEffect } from 'react';
import Mario from '../entitati/Mario.js';
import { NIVEL_1_1, TILE_SIZE } from '../nivel/harta.js'; // Importă datele hărții - se decomenteaza linia la momentul potrivit

/**
 * TODO Student: Pasul (Funcția de Desenare Nivel)
 * Implementează o funcție care să randeze harta pe Canvas.
 * * Pași logici:
 * 1. Primește 'context' (2D) și 'harta' (matricea NIVEL_1_1) ca parametri.
 * 2. Folosește două bucle for (sau forEach - daca stilul specific JS este cu forEach sa uzezi asta) imbricate pentru a parcurge matricea:
 * - Prima buclă parcurge rândurile (Y).
 * - A doua buclă parcurge coloanele (X) din rândul respectiv.
 * 3. Identifică valoarea celulei:
 * - Dacă este 1, setează context.fillStyle = 'brown' (pământ).
 * - Dacă este 2, setează context.fillStyle = 'orange' (bloc întrebare).
 * 4. Calculează poziția de desenare:
 * - Desenăm la (coloana * TILE_SIZE, rand * TILE_SIZE).
 * 5. Folosește context.fillRect() pentru a desena pătratul de dimensiune TILE_SIZE.
 */

function deseneazaNivel(context, harta) {
    // 1. Prima buclă parcurge rândurile (axa Y)
    for (let rand = 0; rand < harta.length; rand++) {
        
        // 2. A doua buclă parcurge coloanele (axa X) din rândul curent
        for (let coloana = 0; coloana < harta[rand].length; coloana++) {
            
            // 3. Identificăm valoarea celulei curente
            let valoareCelula = harta[rand][coloana];

            if (valoareCelula === 1) {
                context.fillStyle = 'brown'; // <- Pune culoarea cerută de Emanuel aici
            } else if (valoareCelula === 2) {
                context.fillStyle = 'orange'; // <- Pune culoarea cerută de Emanuel aici
            } else {
                // Dacă valoarea e 0 (sau goală), nu desenăm nimic și trecem la următoarea
                continue; 
            }

            // 4. Calculăm poziția de desenare pe ecran
            let pozitieX = coloana * TILE_SIZE;
            let pozitieY = rand * TILE_SIZE;

            // 5. Desenăm pătratul efectiv
            context.fillRect(pozitieX, pozitieY, TILE_SIZE, TILE_SIZE);
        }
    }
}
const EcranJoc = () => {
    //Referință către <canvas> (Element DOM)
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        const mario = new Mario(100, 100);
        mario.viteza.seteaza(2, 0);
        
        let requestId; // Variabila care ține minte procesul de animație
        
        /**
         *Funcție recursivă pentru ciclul repetitiv care face funcțional jocul
         *Și care execută împrospătare ecranului
         */ 
        const loop = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            mario.actualizeaza();
            mario.deseneaza(context);
            requestId = requestAnimationFrame(loop); // Actualizăm ID-ul
        };
        
        requestId = requestAnimationFrame(loop); // Pornirea inițială
        
        // Funcție de cleanup pentru a opri procesele la demontarea componentei
        return () => {
            /** * TODO Student: Implementează oprirea animației.
             * Fără acest pas, jocul va continua să ruleze în fundal (Memory Leak).
             * Folosește funcția nativă cancelAnimationFrame.
             * * Documentație de referință pentru dezvoltare jocuri web:
             * https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
             */
            
            // Scrie aici linia de cod pentru anulare folosind requestId:
            
            console.log("Cleanup executat: Motorul de joc a fost oprit.");
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={640}
            height={480}
            style={{ border: '2px solid black', background: '#5c94fc' }}
        />
    );
};

export default EcranJoc;
