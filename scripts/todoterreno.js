import { Vehiculo } from "./vehiculo.js";
// SI no se escribe el código correspondiente al constructor por defecto se puede llamar igualmente

export class Todoterreno extends Vehiculo {
    #traccion;
    constructor (marca, modelo, color, fabricacion, cilindrada, traccion) {
        super (marca,modelo,color,fabricacion,cilindrada)
        this.#traccion=traccion

    }
    get traccion(){
        return this.#traccion
    }
    set traccion(value) {
        this.#traccion=value
    }
}