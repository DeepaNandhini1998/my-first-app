const URL = "http://restcountries.com/v3.1/all"
const myreq = new XMLHttpRequest();
myreq.addEventListener("load",function(){
    const obj = JSON.parse(this.response)
    for(let val of obj){
        console.log(val.flags.png)
    }
});
myreq.open("GET",URL);
myreq.send()