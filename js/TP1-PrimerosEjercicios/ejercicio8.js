// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

// == compara los valores haciendo conversiones de tipo si es necesario.
// === compara valor y tipo de dato.

let numero = parseInt(prompt("Ingrese un numero: "))

if(numero % 2 == 0){
  console.log("el " + numero + " es divisible por 2")
  document.write("el " + numero + " es divisible por 2")
}
else{
  console.log("el " + numero + " no es divisible por 2")
  document.write("el " + numero + " no es divisible por 2")
}