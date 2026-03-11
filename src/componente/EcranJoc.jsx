import React, { useRef, useEffect } from 'react';
import Mario from '../entitati/Mario.js';

const EcranJoc = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // TODO Student: 
        // 1. Obține contextul 2D al canvas-ului.
        // 2. Creează o instanță de Mario.
        // 3. Implementează funcția loop() (Game Loop).
        // 4. Pornește animația cu requestAnimationFrame.
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
