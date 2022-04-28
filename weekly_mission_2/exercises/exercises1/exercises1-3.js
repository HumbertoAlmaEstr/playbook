const userUber =
{
    name: "Raziel Oromazes",
    city: "Estado de Mexico",
    travel: 799,
    getTotally: function() {
        return `A hecho ${this.travel} viajes en 1 año`
    }
}

console.log("---------------------------Uber-----------------------------")
console.log("Nombre de Usuario: " + userUber.name)
console.log("Ciudad: " + userUber.city)
console.log(userUber.getTotally())
console.log("------------------------------------------------------------")

