/**
 * @file harta.js
 * @description Definirea structurii nivelului sub formă de grid (matrice).
 */

/**
 * Legenda:
 * 0 = Aer / Fundal (Non-Solid)
 * 1 = Bloc de pământ (Solid)
 * 2 = Bloc "întrebare" (Solid)
 * 3 = Teavă (Solid)
 * * TODO Student: Pasul (Extinderea Lumii)
 * 1. Mărește matricea pentru a semăna cu începutul nivelului 1-1 din Mario.
 * 2. Ai nevoie de cel puțin 15 rânduri pe înălțime (axa Y).
 * 3. Pe lungime (axa X), adaugă suficiente coloane pentru a permite deplasarea.
 * * Referințe: https://javascript.info/map-set (pentru logica de array-uri)
 * Vizualizare 1-1: https://nesmaps.com/maps/SuperMarioBrothers/SuperMarioBrothers.html
 */
export const NIVEL_1_1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 2, 0, 2, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
];

/**
 * TILE_SIZE definește dimensiunea unui pătrat din grid.
 * Dacă TILE_SIZE = 32, atunci elementul de la NIVEL_1_1[2][5] 
 * se va desena la X = 5 * 32 și Y = 2 * 32.
 */
export const TILE_SIZE = 32;
