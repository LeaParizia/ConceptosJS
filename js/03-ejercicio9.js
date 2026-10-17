/* Escribe un programa que pida una frase y escriba las vocales que aparecen.
Nota: Tener en cuenta la funcion lenght y susbstringo chartAt (developer mozilla) 
ejemplo: Hola Mundo
output: oauo*/

//const frase = prompt('Ingrese una frase de hasta 5 caracteres: ');

//console.log(frase.length); //cantidad de caracteres de la frase
//console.log(frase.charAt(0)); //devuelve el caracter de la posicion 0

//console.log(frase.toUpperCase()); //devuelve la frase en mayusculas
//console.log(frase.toLowerCase()); //devuelve la frase en minusculas 


// usar un solo igual asigna la variable
// a == b verifica los valores de la variable
// a === b verifica los valores y el tipo de dato de la variable sean iguales
// a !== b verifica que los valores de la variable sean diferentes estrictamente distintos
/*
if(frase.charAt(0) === 'a' || frase.charAt(0) === 'e' 
|| frase.charAt(0) === 'i' || frase.charAt(0) === 'o' 
|| frase.charAt(0) === 'u') {
  console.log(frase.charAt(0));
}
if(frase.charAt(1) === 'a' || frase.charAt(1) === 'e'
|| frase.charAt(1) === 'i' || frase.charAt(1) === 'o' 
|| frase.charAt(1) === 'u') {
  console.log(frase.charAt(1));
}
if(frase.charAt(2) === 'a' || frase.charAt(2) === 'e'
|| frase.charAt(2) === 'i' || frase.charAt(2) === 'o' 
|| frase.charAt(2) === 'u') {
  console.log(frase.charAt(2));
}
if(frase.charAt(3) === 'a' || frase.charAt(3) === 'e'
|| frase.charAt(3) === 'i' || frase.charAt(3) === 'o'
|| frase.charAt(3) === 'u') {
  console.log(frase.charAt(3));
}
if(frase.charAt(4) === 'a' || frase.charAt(4) === 'e'
|| frase.charAt(4) === 'i' || frase.charAt(4) === 'o'
|| frase.charAt(4) === 'u') {
  console.log(frase.charAt(4));
}
  */

const frase = prompt('ingrese una frase'.toLocaleLowerCase())

for (let caracter = 0; caracter < frase.length; caracter++) {
  if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u"
  ) {
    console.log(frase.charAt(caracter));
  }
}
  
  

