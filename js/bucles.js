// while, do-while, for 

//while = mientras se cumpla la condicion, se ejecuta el bloque de codigo

/* 
while(condicion logica) {
todas las lineas de codigo que quiero repetir varias veces
agregar una linea que haga que mi condicion se deje de cumplir en algun momento
}
*/

let bateria = 100;

while(bateria > 0) { //la condicion debe ser verdadera para que se ejecute el bloque de codigo
  console.log('Bateria restante: ' + bateria);
  //bateria++ //bateria = bateria + 1
  bateria-- //bateria = bateria - 1
  //bateria = bateria - 10 decrece de diez en diez bucle controlado
}

// do - while (hacer  - mientras)

let intentos = 0;

do {
  console.log('Intento N°: ' + intentos);
  intentos++;
} while(intentos <= 3);

// for (para) funciona como un while

//for(inicializamos una variable; condicion logica ; incremento o decremento de la variable)
//{
//  todas las lineas que quiero que ejecute el bucle
//}

for(let bateria = 100;bateria > 100; bateria--) //bateria = bateria - 5,  disminuye de 5 en 5 
{
  console.log('bateria restante:' + bateria)
}