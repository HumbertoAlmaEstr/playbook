const user = 
{
    user: "@elmarianaa", 
    username: "ElMariana", 
    bio: "|| Master en Cagarla | Partner de Twitch | Creador de Contenido || elmariana@randy.com.mx", 
    age: 21,
    following: 615,
    followers: 2.1,
    getFollowersTot: function() {
        return `Seguidores: ${this.followers} Millones`
    }
}

console.log("---------------------------Twitter-----------------------------")
console.log()
console.log("Usuario: " + user.user)
console.log("Siguiendo: " + user.following)
console.log(user.getFollowersTot())
console.log("Biografia:")
console.log(user.bio)
console.log()
console.log("---------------------------------------------------------------")
