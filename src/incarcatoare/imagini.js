/**
 * Încarcă o imagine în mod asincron.
 * @param {string} url - Calea către fișierul imagine (ex: '/img/sprites.png')
 * @returns {Promise<HTMLImageElement>} - O promisiune care returnează obiectul Image când e gata.
 */
export function incarcaImagine(url) {
    return new Promise((resolve, reject) => {
        const imagine = new Image();
        
        imagine.addEventListener('load', () => {
            // Se execută când imaginea e descărcată complet
            resolve(imagine);
        });

        imagine.addEventListener('error', () => {
            // Se execută dacă imaginea nu poate fi găsită (cale greșită)
            reject(new Error(`Nu s-a putut încărca imaginea de la adresa: ${url}`));
        });

        imagine.src = url;
    });
}
