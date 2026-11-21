/*Ejercicios con Math*/

/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/


let nombre1 = prompt("por favor, ingrese nombre de la primer persona: " )
let edad1 = parseInt(prompt("por favor, ingrese la edad de la primera persona: "))

let nombre2 = prompt("por favor, ingrese nombre de la segunda persona: " )
let edad2 = parseInt(prompt("por favor, ingrese la edad de la segunda persona: "))

let nombre3 = prompt("por favor, ingrese nombre de la tercer persona: " )
let edad3 = parseInt(prompt("por favor, ingrese la edad de la tercer persona: "))


let edadMayor = Math.max(edad1,edad2,edad3) 

if(edadMayor == edad1){
  document.write(nombre1 + " es el mayor")
  console.log(nombre1 + " es el mayor")
}
if(edadMayor == edad2){
  document.write(nombre2 + " es el mayor")
  console.log(nombre2 + " es el mayor")
}
if(edadMayor == edad3){
  document.write(nombre3 + " es el mayor")
  console.log(nombre3 + " es el mayor")
}
