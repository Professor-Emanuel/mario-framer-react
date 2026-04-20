import InputTastatura from '../input/InputTastatura.js';

test('InputTastatura ar trebui să detecteze când o tastă este apăsată', () => {
    const input = new InputTastatura();
    
    // 1. Îi spunem clasei să înceapă să "asculte" pe fereastra curentă
    input.asculta(window);

    // 2. Creăm evenimentul fals (apasăm tasta Space)
    const eveniment = new KeyboardEvent('keydown', { code: 'Space' });
    window.dispatchEvent(eveniment);

    // 3. Verificăm dacă totul e corect
    expect(input.esteApasata('Space')).toBe(true);
});