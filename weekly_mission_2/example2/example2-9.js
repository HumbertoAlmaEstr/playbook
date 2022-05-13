<<<<<<< HEAD
class Developer {

    constructor(name, mainLang, stack){

        this.name =  name
        this.mainLang = mainLang
        this.stack = stack
}
  
get getName() {

    return this.name
    }
}
  
console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Humberto", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}
  
const humbertoLaunchXDev = new LaunchXStudent("Humberto", "js", ["elixir", "groovy", "lisp"])
console.log(humbertoLaunchXDev)
=======
class Developer {

    constructor(name, mainLang, stack){

        this.name =  name
        this.mainLang = mainLang
        this.stack = stack
}
  
get getName() {

    return this.name
    }
}
  
console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Humberto", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}
  
const humbertoLaunchXDev = new LaunchXStudent("Humberto", "js", ["elixir", "groovy", "lisp"])
console.log(humbertoLaunchXDev)
>>>>>>> 67d7566a5e7f13b5acbcd44e33dbe2540914319f
console.log(humbertoLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija