/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número 
que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

alert("Vamos a generar una piramide inversa de numeros")
alert("Por favor, ingrese un numero entre 1 y 50")

let numUsuario = parseInt(prompt("Ingrese un numero entre 1 y 50: "))

if(numUsuario >= 1 && numUsuario <= 50) {

  let piramideInversa = "";
  
  for (let i = numUsuario; i >= 1; i--) { //controla que numero tocaria (ingresado por el usuario)
    
    for (let h = 1; h <= i; h++) { //controla cuantas veces se repite el numero
      piramideInversa += i;
    }
    piramideInversa += "<br>";
  }
  document.write(piramideInversa);
} else {
  alert("El número ingresado no está en el rango permitido.");
}