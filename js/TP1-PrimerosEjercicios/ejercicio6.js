// 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 
// input: 15 , 3
// Output: El 15 es el número más grande

let number1 = parseInt(prompt("Ingrese un numero: "))
let number2 = parseInt(prompt("Ingrese otro numero: "))

if(number1 > number2){
  console.log("el " + number1 + " es mayor que " + number2) //para mostrar por consola
  document.write("el " + number1 + " es el numero mas grande") //para mostrar por pantalla
}else{
  console.log("el " + number2 + " es mayor que " + number1)
  document.write("el " + number2 + " es el numero mas grande")
}
