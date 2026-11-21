/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
 */

let texto = prompt("por favor, ingrese un texto: ");

for (let i = 0; i < texto.length; i++) {

  let letra = texto[i];

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    console.log("la vocal " + letra +  " se encuentra en la posicion: " + i);
    break
  }
}