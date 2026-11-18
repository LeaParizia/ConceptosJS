/*Ejercicios con Math*/

/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/


alert("por favor, presione aceptar para ver un numero aleatorio entre 1 y 99!")

//como funciona, math random devuelve un numero aleatorio entre 0 y 1, pero al 1 no lo incluye 
// math floor redondea hacia el entero hacia abajo
// al multiplicar por 99 amplias el rango para que los numeros sean entre 0 y 99
// y al sumarle 1 agregas una unidad, ya que el ejercicio pide entre 1 y 99


//let numeroRandom = (Math.random() * 99) + 1 // asi genera un numero aleatorio tambien pero sin redondear, mostrando decimales

let numeroRandom = Math.floor(Math.random() * 99) + 1

alert(numeroRandom)

console.log(numeroRandom)

