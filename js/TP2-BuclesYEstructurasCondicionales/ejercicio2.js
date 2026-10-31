/*2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/

let nota = parseInt(prompt("ingrese una nota entre 0 y 10: "))
/*
if(nota <= 10 && nota >= 0){
  
  if(nota <= 2) {
    alert("Muy deficiente")
  }
  else if(nota <= 4) {
    alert("insuficiente")
  }
  else if(nota <= 6) {
    alert("Suficiente")
  }
  else if(nota == 7) {
    alert("Bien")
  }
  else if(nota <= 9) {
    alert("Notable")
  }
  else if(nota == 10) {
    alert("Sobresaliente")
  }
}
else{
  alert("la nota ingresada es incorrecta")
}
  */

/*Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5        Output: Suficiente
Input: 50       Output: Número erróneo
Input: hola10   Output: Introduce un número válido
*/

if(nota <= 10 && nota >= 0){
  
  if(nota <= 2) {
    alert("Muy deficiente")
  }
  else if(nota <= 4) {
    alert("insuficiente")
  }
  else if(nota <= 6) {
    alert("Suficiente")
  }
  else if(nota == 7) {
    alert("Bien")
  }
  else if(nota <= 9) {
    alert("Notable")
  }
  else if(nota == 10) {
    alert("Sobresaliente")
  }
}
else if(isNaN(nota)){
  alert("Introduce un número válido")
}
else{
  alert("número erróneo")
}