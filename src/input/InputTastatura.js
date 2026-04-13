/**
 * TODO Student: Implementează monitorizarea tastaturii.
 * Clasa trebuie să asculte evenimentele de keydown și keyup
 * și să stocheze starea tastelor într-un Set sau Map.
 */
export default class InputTastatura {
    constructor() {
        // Aici stocăm starea tastelor (ex: care tastă e apăsată)
        this.stariTastatura = new Map();
    }

    asculta(fereastra) {
        // TODO: Adaugă event listeners pentru 'keydown' și 'keyup'
        // Documentație: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    }

    esteApasata(codTasta) {
        // TODO: Returnează true dacă tasta este apăsată
        return false; 
    }
}
