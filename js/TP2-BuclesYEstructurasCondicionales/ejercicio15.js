/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let textoIngreso = prompt("por favor, ingrese un texto cualquiera: ")

let contadorVocales = 0

for(let i=0;i < textoIngreso.length;i++){

  
  if(textoIngreso[i] === "a" || textoIngreso[i] === "e" || textoIngreso[i] === "i" || 
    textoIngreso[i] === "o" || textoIngreso[i] === "u")
  {
    contadorVocales++
  }
}

console.log("la cantidad de vocales del texto es: " + contadorVocales)
