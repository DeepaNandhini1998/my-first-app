class Person{
    constructor(name,age,city,state){
        this.name=name;
        this.age=age;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        age:${this.age}
        city:${this.city}
        state:${this.state}`)
    }
    }
    let  Person1=new Person("Deepa","26","Chennai","Tamilnadu")
    Person1.details()