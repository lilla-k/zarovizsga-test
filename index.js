class Movie{
    constructor(title, duration, actors){
        this.title=title;
        this.duration=duration;
        this.actors=actors;
        this.watched=false;
    }
    watch(){
        this.watched=true;
    }
    getDescription(){
        console.log(
            `Movie title: ${this.title}, 
            movie duration: ${this.duration}, 
            ${this.watched===true? "I have watched":"I have not watched"}, 
            actors: ${this.actors.join(", ")}`
        )
    }

    //static
    static minInHour(min){
        return min/60;
    }
    //instance metódus
    // minInHour(min){
    //     return min/60;
    // }
    getDurationInHour(){
        return Movie.minInHour(this.duration);
    }
}

const jurassicPark = new Movie("Jurassic Park", 180, ["Helena", "Joseph"])
jurassicPark.getDescription()
jurassicPark.watch()
jurassicPark.getDescription()

const starWars = new Movie("Star Wars", 120, ["Elza", "Anna"])
starWars.getDescription()
console.log(Movie.minInHour(starWars.duration))


//static method lehet, mert nem használja a this-t, mindig a 200-zal dolgozik
console.log(Movie.minInHour(200))
console.log(Movie.minInHour(200))
//instance method, this-t használ, különböző duration-t használ
console.log(starWars.getDurationInHour())
console.log(jurassicPark.getDurationInHour())

