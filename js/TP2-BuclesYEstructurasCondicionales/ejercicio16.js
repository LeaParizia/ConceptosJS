/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let texto = prompt("por favor, ingrese un texto: ")

let textoInverso = ""

for(let i = texto.length -1 ; i >= 0;i--){
  textoInverso += texto[i] //faltaba concantenar el texto, por eso el error
}

console.log(textoInverso)