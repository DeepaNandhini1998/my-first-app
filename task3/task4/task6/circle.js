class Circle {
constructor(color,radius){
    this.color=color;
    this.radius=radius;
}
setColor(color){
    this.color=color;
}
setRadius(radius){
    this.radius=radius;
}
getColor(color){
    return this.color;
}
getRadius(radius){
    return this.radius;
}
getArea(){
    let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2)
    return `"Area of circle is" ${area}`
}
getCircumference(){
    let circum=(2*3.14*this.getRadius()).toFixed(2)
    return `"Circumference of circle is" ${circum}`
}
display(){
 let str = `[radius : ${this.getRadius()}, color : ${this.getColor()}]`;
 return str;   
}
}
let circle1=new Circle();
let circle2=new Circle("blue");
let circle3=new Circle(3,"black");
circle1.setRadius(4);
circle1.setColor("pink");
circle2.setRadius(6);
console.log(circle1.display())
console.log(circle2.display())
console.log(circle3.getArea())
console.log(circle3.getCircumference())