class Toolbox {
    static getMostUsefulTools(){
      return ["Command line", "git", "Text Editor"]
    }
  }
  
  console.log("Ejemplo 8: Métodos static")
  // Puedo llamar el método static directamente con el nombre de la clase
  console.log(Toolbox.getMostUsefulTools())