/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

/*
Este confirm()método muestra un cuadro de diálogo con un mensaje, un botón Aceptar y un botón Cancelar.

El confirm()método devuelve true si el usuario hizo clic en "Aceptar", de lo contrario false.

Un cuadro de confirmación se usa a menudo cuando se quiere que el usuario verifique o acepte algo.

Un cuadro de confirmación desvía el foco de la ventana actual y obliga al usuario a leer el mensaje.

No abuses de este método. 
Impide que el usuario acceda a otras partes de la página hasta que se cierre la ventana.*/


// do while usando un if adentro para evitar que el texto concatenado empiece con - en caso de empezar vacio.

let resultado = "";

do{
  
  let texto = prompt("Hola, ingrese un texto por favor: ")
  if(resultado != ""){
  resultado += "-"
}
  resultado += texto

}while((confirm("Desea agregar mas texto ?") == true))   //funciona igual si despues del parentesis se pone == true

document.write(resultado)