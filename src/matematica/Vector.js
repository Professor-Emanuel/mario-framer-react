/**
 * Clasă definită de utilizator pentru gestionarea calculelor vectoriale.
 * Aceasta stă la baza mișcării tuturor entităților din joc.
 */
export default class Vector {
    constructor(x, y) {
        this.seteaza(x, y);
    }

    // Metodă pentru configurarea coordonatelor
    seteaza(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    // Metodă pentru adunarea deplasării (Viteză + Poziție)
    adauga(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    // Metodă pentru multiplicarea forțelor (ex: fricțiune)
    multiplica(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
}
