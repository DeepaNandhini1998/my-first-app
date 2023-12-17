class Uber_Rate{
constructor(distance){
    this.distance=distance;
  }
  getRate(){
    return (this.distance)*40;
  }
}
let uber = new Uber_Rate(20);
console.log(uber.getRate());