// herencia
import { Vehiculo } from "./vehiculo.js";
export class Furgoneta extends Vehiculo {
    #pasajeros;
    constructor (marca,modelo,color,fabricacion,cilindrada,pasajeros) {
        super (marca,modelo,color,fabricacion,cilindrada)
        this.#pasajeros
    }
    get pasajeros () {
        return this.#pasajeros
    }
    set pasajeros(value){
        this.#pasajeros=value;
    }
}