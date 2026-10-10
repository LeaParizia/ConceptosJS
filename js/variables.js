//esto es un comentario de una sola línea

/*
esto es un comentario de varias líneas
*/ 

// crear variables (let - const - var)
//tipos de datos: primitivos, referencia

// let, variable que se va cambiando a lo largo del desarrollo del programa
//declarar y asignar valor a la variable
//= operador de asignación
let numeroEntero = 10;
let numeroDecimal = 10.5;
//JS entiendo el tipo de dato number

console.log('este es un mensaje de prueba');
console.log(numeroEntero);
console.log(numeroDecimal);
console.log('el numero entero es: ' + numeroEntero + ' y el numero decimal es: ' + numeroDecimal);

//para mostrar el tipo de dato de una variable se utiliza typeof
console.log(typeof numeroEntero);
console.log(typeof numeroDecimal);

let nombre = 'Juan';
console.log(typeof(nombre));

//tipo booleano true, false
let encendido = true;
console.log(typeof (encendido));

//variable sin asignar valor, JS la interpreta como undefined
let variableDePrueba;
console.log(typeof (variableDePrueba));

let vacio = null;
console.log(typeof (vacio));
console.log(vacio);

//cambiar el contenido de una vanriable
vacio = 'prueba'

//creando una variable con const, esta variable no puede cambiar su valor
const url = "https://universe.rollingsodeschool.com/";

console.log(url);

url = "https://www.google.com/"; //esto genera un error porque la variable es const
