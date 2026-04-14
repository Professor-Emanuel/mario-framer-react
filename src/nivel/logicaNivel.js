import { NIVEL_1_1, TILE_SIZE } from './harta.js';

/**
 * Funcție care verifică dacă la anumite coordonate (x, y) în pixeli,
 * se află un bloc solid în matricea nivelului.
 */
export function esteSolid(x, y) {
    // TODO Student:
    // 1. Transformă x și y din pixeli în indici de matrice (împarte la TILE_SIZE și folosește Math.floor) - mai trebuie "rand" sa declari - initializezi
    const coloana = Math.floor(x / TILE_SIZE);
    // 2. Verifică dacă rândul și coloana există în NIVEL_1_1
    // 3. Returnează true dacă valoarea din matrice este 1 (sau > 0) și false dacă este 0.
    
    return false; // Placeholder
}
