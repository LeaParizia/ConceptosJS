/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI 
(Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999

Debemos calcular el resto de la división entera entre el número y el número 23.

Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 

Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821            Output: ‘L’
*/


//ARRAY
let letraRestoDni = ["T", "R", "W", "A", "G", "M", "Y", 
                     "F", "P", "D", "X", "B", "N", "J", 
                     "Z", "S", "Q", "V", "H", "L", "C", 
                     "K", "E"]; 



do {
  let numDni = parseInt(prompt("Por favor, ingrese su número de DNI: "))
  if(isNaN(numDni)){

  alert("lo ingresado no es un numero de dni valido !!")

}
else if(numDni >=0 && numDni <= 99999999){
  
  let restoDivision = numDni % 23

  //console.log(restoDivision)
  //console.log(letraRestoDni[restoDivision])
  alert("la letra que le corresponde al dni Nº " + numDni + " es: " + (letraRestoDni[restoDivision]))
}
else{
  alert("el numero ingresado esta fuera de rango")
}
  
} while (confirm("desea agregar otro numero?"));