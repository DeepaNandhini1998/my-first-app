const URL = "https://restcountries.com/v3.1/all"
const myreq = new XMLHttpRequest()

myreq.open("GET", URL)
myreq.send()

myreq.addEventListener("load",function(){
    const object = JSON.parse(this.response)

    function checkcurrency (obj) {
        return obj?.currencies?.USD
    }
    let countries = object.filter(checkcurrency)
    console.log(countries)
})