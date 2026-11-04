/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/


let num = parseInt(prompt("Ingrese un número entre 1 y 50:"));

if (num >= 1 && num <= 50) {
  let piramide = "";

  for (let i = 1; i <= num; i++) { //controla que numero tocaria (ingresado por el usuario)
    for (let j = 1; j <= i; j++) { //controla cuantas veces se repite el numero
      piramide += j;
    }
    piramide += "<br>"; //salto de linea 
  }

  document.write(piramide);
} else {
  alert("El número debe estar entre 1 y 50.");
}