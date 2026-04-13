import { incarcaImagine } from '../incarcatoare/imagini.js';

test('incarcaImagine ar trebui să returneze o promisiune care se rezolvă cu o imagine', (done) => {
    const url = '/active/imagini/sprites.png';

    // Salvăm constructorul original
    const OriginalImage = window.Image;

    // Creăm un "Mock" (o imitație) pentru obiectul Image
    global.Image = class extends OriginalImage {
        constructor() {
            super();
            // Simulăm un mic delay (ca și cum s-ar descărca de pe net)
            setTimeout(() => {
                if (this.src) {
                    // Declanșăm manual evenimentul 'load'
                    this.dispatchEvent(new Event('load'));
                }
            }, 50);
        }
    };

    // Apelăm funcția ta
    incarcaImagine(url).then(imagineIncarcata => {
        // Verificările (Aserțiunile)
        expect(imagineIncarcata instanceof OriginalImage).toBe(true);
        expect(imagineIncarcata.src).toContain(url);
        
        // Curățăm mediul de test după ce terminăm
        global.Image = OriginalImage;
        done(); // Îi spunem lui Jest: "Gata, poți afișa rezultatul"
    }).catch(err => {
        done(err); // Dacă crapă, spune-ne de ce
    });
});
