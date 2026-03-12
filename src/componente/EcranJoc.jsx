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
        
        /**
         *Funcție recursivă pentru ciclul repetitiv care face funcțional jocul
         *Și care execută împrospătare ecranului
         */ 
        const loop = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            mario.actualizeaza();
            mario.deseneaza(context);
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
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
