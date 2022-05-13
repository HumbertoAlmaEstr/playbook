<<<<<<< HEAD
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
=======
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
>>>>>>> 67d7566a5e7f13b5acbcd44e33dbe2540914319f
  console.log(users) // sorted ascending