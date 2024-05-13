function saad(){
    var now = new Date()
var birth = new Date(document.getElementById("date").value)
var birthdate = now -birth
var age = Math.floor(birthdate/(1000*3600*24*365))
document.getElementById("dat").innerText = "You are " + age + " years old."

var age = Math.round(birthdate/(1000*3600*24))
document.getElementById("data").innerText = "You are " + age + " Days old."
var age = Math.round(birthdate/(1000*3600*24*7))
document.getElementById("data0").innerText = "You are " + age + " Weeks old."

var age = Math.round(birthdate/(1000*60*60))
document.getElementById("data1").innerText = "You are " + age + " hours old."
var age = Math.round(birthdate/(1000*60))

document.getElementById("data2").innerText = "You are " + age + " Minutes old."

var age = Math.round(birthdate/1000)
document.getElementById("data3").innerText = "You are " + age + " Second old."

}