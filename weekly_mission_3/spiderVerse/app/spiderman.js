class Spiderman
{
    constructor(name, age, actor, movie, studio)
    {
        this.name =name
        this.age = age
        this.actor = actor
        this.movie = movie
        this.studio = studio
        
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.studio} studio`
    }
}




module.exports = Spiderman