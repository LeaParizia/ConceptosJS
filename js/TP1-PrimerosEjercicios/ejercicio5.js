// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y 
// escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

let num1 = parseInt(prompt("Ingrese un numero entero: "));
let num2 = parseInt(prompt("Ingrese otro numero entero: "));
document.write("la suma de " + num1 + " + " + num2 + " es igual a: " + (num1+num2));




// METODO PARA VALIDACION DE NUMEROS

//pidiendo los datos al usuario
//para convertir el dato ingresado a número entero se utiliza parseInt
//para convertir el dato ingresado a número decimal se utiliza parseFloat
//isNan(variable) = true si pongo un texto, false si pongo un número
//una pregunta SI = if
//(condicion logica) 
// {las lineas que quiero hacer SI se cumplen la condicion logica}
//else
// {las lineas que quiero hacer si NO se cumplen la condicion logica} 
//true = false
//!false = true
// el contenido de las varibles numero1 Y numero2 son numeros? Y operador logico
//operador logico NOT !, AND &&

const numero1 = parseInt(prompt('Ingrese el primer número: ')); 
const numero2 = parseInt(prompt('Ingrese el segundo número: '));

if(!isNaN(numero1) && !isNaN(numero2)){
  const resultado = numero1 + numero2;
  console.log('el resultado de la suma es: ' + resultado);
}
else{
  console.log('No ingresaste un número valido');
}
