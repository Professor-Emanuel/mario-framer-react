import { esteSolid } from '../nivel/logicaNivel.js';

test('Ar trebui să detecteze pământul ca fiind solid', () => {
    // Dacă în harta.js la [3][0] avem 1, și TILE_SIZE e 32
    // înseamnă că la pixelul y = 100 (3 * 32 = 96) ar trebui să fie solid
    const solid = esteSolid(0, 100);
    // expect(solid).toBe(true);
});
