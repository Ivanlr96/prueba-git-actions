// Importar las clases desde los archivos respectivos
// Mirar pseudoseclectores
// Local Storage: Introducir datos, obtener datos, eliminar datos, eliminar todo
import { Vehiculo } from "./vehiculo.js";
import { Furgoneta } from "./furgoneta.js";
import { Todoterreno } from "./todoterreno.js";

// Crear un contenedor para mostrar los resultados
const resultadoContainer=document.createElement('div');
document.body.appendChild(resultadoContainer);
// Funcion para mostrar datos
export function mostrarResultado(mensaje) {
    resultadoContainer.innerHTML+=`<p>${mensaje}</p>`;
}
// Instanciar las clases

const vehiculo1= new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400')
mostrarResultado('--Vehículo 1--');
vehiculo1.mostrarDatos()
vehiculo1.arrancar()
// Recibe 1 parámetro, que es la velocidad
vehiculo1.acelerar(140)
vehiculo1.frenar();

//Variable de tipo object de un objeto vehiculo, que no eso mismo que un objeto
const vehiculoObject= {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}
// Almacenar datos-Guardar el JSON en el Local Storage
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject))
// Recuperar datos- Mostrar el object en consola el JSON que hemos guardado en el LocalStorage, usa el parse para volver a transformarlo
console.log(JSON.parse(localStorage.getItem("vehiculo")))
// Imprimimos por consola el JSON (de
console.log(localStorage.getItem("vehiculo"))

const furgoneta1=new Furgoneta('Mercedes', 'Kangoo', 'azul', 2014, '1800')
mostrarResultado('<br/><br />-----------Furgoneta 1 ---------------')
furgoneta1.mostrarDatos()
furgoneta1.arrancar()
furgoneta1.acelerar(140)
furgoneta1.frenar()

//Guardar en el LocalStorage la marca de una furgoneta
localStorage.setItem("marca furgoneta",furgoneta1.marca)
console.log(furgoneta1.marca)

// Muestra un objeto todoterreno

// Se está aplicando polimorfismo porque estás haciendo lo mismo en 2 objetos diferentes. Se utiliza el mismo método para dos vehiculos distintos
const todoterreno1= new Todoterreno('Suzuki', 'fullpower', 'negro', 2016, '3600', 'si')
mostrarResultado('<br /><br/>---------Todoterreno 1 -----------')
todoterreno1.mostrarDatos()
// Uso de getter

todoterreno1.arrancar()
todoterreno1.acelerar(140)
todoterreno1.frenar()
mostrarResultado('<br /> Traccion: '+todoterreno1.traccion)

const todoterrenoObject= {
    marca: todoterreno1.marca,
    modelo: todoterreno1.modelo,
    color: todoterreno1.color,
    fabricacion: todoterreno1.fabricacion,
    cilindrada: todoterreno1.cilindrada,
    traccion: todoterreno1.traccion
}
// Almacenar los datos en LocalSotrage mediante un bucle iterativo

for(let key in todoterrenoObject ) {
    // hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto
    if (todoterrenoObject.hasOwnProperty(key)) {
        localStorage.setItem(key, todoterrenoObject[key])
    }
// Eliminar un elemento del Local Storage
localStorage.removeItem('color');
localStorage.removeItem('marca furgoneta')
}