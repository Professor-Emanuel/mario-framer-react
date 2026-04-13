import Mario from '../entitati/Mario.js';

test('Mario ar trebui să cadă (Y să crească) după apelarea actualizării', () => {
    const mario = new Mario(100, 100);
    
    // Executăm logica de fizică
    mario.actualizeaza();

    // --- TODO Student: Testează Gravitația ---
    // Scrie un expect care să verifice dacă mario.pozitie.y este acum mai mare decât 100.
});

test('Metoda sari() ar trebui să imprime o viteză negativă pe verticală', () => {
    const mario = new Mario(100, 100);
    
    // Executăm săritura
    mario.sari();

    // --- TODO Student: Testează Săritura ---
    // Scrie un expect care să verifice dacă mario.viteza.y este mai mică decât 0.
});
