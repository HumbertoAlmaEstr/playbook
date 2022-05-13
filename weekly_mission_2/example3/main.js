<<<<<<< HEAD
import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
=======
import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
>>>>>>> 67d7566a5e7f13b5acbcd44e33dbe2540914319f
console.log(viajero1.getGeneralInfo()) // Método de la clase hija