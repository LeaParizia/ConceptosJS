/*4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

//isNaN() sirve para comprobar si un valor no es un número 
// isNaN("hola")=>true, porque "hola" no puede convertirse a numero
// isNan(10)=>false, porque 10 si es un numero  

let suma = 0;

do{
  let numIngresado = parseInt(prompt("por favor, ingrese un numero: "))
  
  if(isNaN(numIngresado)){
    alert("lo ingresado no es un numero !!")
  }
  else{
    suma += numIngresado
    // suma++ de esta forma cuenta las vueltas que da el bucle.
  }
}
while(confirm("desea agregar otro numero?"))

document.write("la suma de los numeros ingresados es: " + suma)