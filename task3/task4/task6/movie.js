
class movie {
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="pg"}

    }
    display (){
        console.log(`${this.title},${this.studio},${this.rating}`)
    }
    movieobject(){
        return({title:this.title, 
            studio:this.studio,
            rating:this.rating})
    }
    getgetpg(arr)
    {
        let data=arr.filter(flim=>flim.rating=="pg")
        console.log(data.map(b=>b.title))
    
    }
}
let movie1=new movie("teri","xxx")
movie1.display()
let movie2=new movie("vikram","yyy","pg")
let movie3=new movie("jailer","kana","pg")
let flim=new movie("royale","suntv production","pg2")
flim.display()
let arr=[]
arr.push(movie1.movieobject())
arr.push(movie2.moviveobject())
arr.push(movie3.movieobject())
console.log(arr)

