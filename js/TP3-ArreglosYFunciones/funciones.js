// // funciones: bloque de codigo aislado que se puede reutilizar

// //funciones sin parametros

// function saludar() {
//   alert("Hola Mundo!");
// }

// //invocar una funcion
// saludar();

// function saludarPersona(nombre) {
//   alert("Hola " + nombre + " !!");
// }

// const nombre = prompt("ingresa tu nombre");
// saludarPersona(nombre);
// saludarPersona("LEANDRO");

// //funciones que retornen un valor

// // function sumar(num1, num2) {
// //   const resultado = num1 + num2;
// //   return resultado;
// //   //return num1 + num2
// // }

// const num1 = Number(prompt("ingresa el primer numero"));
// const num2 = Number(prompt("ingresa el segundo numero"));

// const resultado = sumar(num1, num2);
// console.log("el resultado de la suma es: " + resultado);

// //otra forma de sintaxis mas actual de escribir funciones

// //arrow functions
// const suma = (numero1, numero2) => numero1 + numero2; //return implicito
// console.log("el resultado de la funcion SUMA es " + suma);

/*Ejercicio: Calculadora de Descuentos en Tienda

Una tienda online necesita automatizar el cálculo final de sus ventas:

1-Crea una función llamada aplicarDescuento que reciba dos parámetros: el precioOriginal y el porcentajeDescuento.

2-La función debe calcular el precio final aplicando la rebaja y retornar ese nuevo valor.

3-Fuera de la función, simula dos compras distintas, guarda el resultado retornado en variables y 
muestra un mensaje en pantalla indicando cuánto debe abonar el cliente en cada caso.*/

function aplicarDescuento(precioOriginal, porcentajeDescuento){
  const montoDescuento = precioOriginal * porcentajeDescuento / 100
  const precioFinal = precioOriginal - montoDescuento
  console.log(precioFinal)
}

aplicarDescuento(1000,10)

//simular dos compras
const precio1 = Number(prompt("ingresa el monto total:"))
const desc1 = Number(prompt("ingresa el % del descuento"))
const precio2 = Number(prompt("ingresa el monto total:"))

const preciofinal1 = aplicarDescuento(precio1, desc1);
const preciofinal2 = aplicarDescuento(precio2, 10);
console.log('el precio de la primera venta es: ' + preciofinal1);
console.log('el precio de la primera venta es: ' + preciofinal2);
