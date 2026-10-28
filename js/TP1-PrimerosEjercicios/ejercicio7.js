// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9


// Output: El 15 es el número más grande

let number1 = parseInt(prompt("Ingrese un numero: "))
let number2 = parseInt(prompt("Ingrese otro numero: "))
let number3 = parseInt(prompt("Por ultimo, ingrese otro numero: "))

if(number1 > number2 && number1 > number3) {
  document.write("el " + number1 + " es el numero mas grande")
}
else if(number2 > number1 && number2 > number3){
  document.write("el " + number2 + " es el numero mas grande")
}
else{
  document.write("el " + number3 + " es el numero mas grande")
}
