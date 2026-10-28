/*10.- Escribe un programa que pida un número y nos diga 
si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20

Output: El 20 es divisible por 2.*/

/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir 
todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.*/

//varios if para que el numero pase por todas las consultas.

let numero = parseInt(prompt("ingrese un numero: "))

let resultado = "El " + numero + " es divisible ";

if(numero % 2 == 0){
  resultado += "por 2"
}
if (numero % 3 == 0){
  resultado += " por 3"
}
if(numero % 5 == 0){
  resultado += " por 5"
}
if (numero % 7 == 0){
  resultado += " por 7"
}
document.write(resultado)