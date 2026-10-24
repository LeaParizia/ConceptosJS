// funciones: bloque de codigo aislado que se puede reutilizar

//funciones sin parametros

function saludar(){
  alert("Hola Mundo!")
}

//invocar una funcion
saludar();

function saludarPersona(nombre){
  alert("Hola " + nombre + " !!")
}

const nombre = prompt('ingresa tu nombre')
saludarPersona(nombre)
saludarPersona('LEANDRO')

//funciones que retornen un valor

function sumar(num1, num2){
  const resultado = num1 + num2;
  return resultado
}

const num1 = Number(prompt('ingresa el primer numero'))
const num2 = Number(prompt('ingresa el segundo numero'))

const resultado = sumar(num1,num2);
console.log("el resultado de la suma es: " + resultado);