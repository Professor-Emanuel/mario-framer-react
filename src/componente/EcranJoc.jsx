import React, { useRef, useEffect } from 'react';
import Mario from '../entitati/Mario.js';

/**
 *Componentă React responsabilă pentru afisarea suprafeței de joc
 *Și gestionareaa buclei principale de animație
 */ 
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
