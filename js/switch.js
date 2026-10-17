// Cree un programa al estilo de un cajero automatico con las siguientes opciones:

// 1- consultar el saldo

// 2- ingresar dinero

// 3- extraer dinero


// const opcion = prompt('Ingrese una opción: 1 - consultar saldo, 2 - ingresar dinero, 3 - extraer dinero');

/*
switch(variable) {

case 1:
  //codigo a ejecutar si la variable es igual a 1
  break;
case 2:
  //codigo a ejecutar si la variable es igual a 2
  break;
case 3:
  //codigo a ejecutar si la variable es igual a 3
  break;
case n:
  // todas las lineas del caso n
  break;
default:
  //codigo a ejecutar si la variable no coincide con ningun caso
}
*/


// para usar en menu de opciones

const opcion = prompt('Ingrese una opción: 1 - consultar saldo, 2 - ingresar dinero, 3 - extraer dinero');
let saldo = 5000; // saldo inicial

switch(opcion) {
  case '1':
    alert ('Su saldo es de $' + saldo);
    break;
  case '2':
    const deposito = parseFloat(prompt('Ingrese el monto a depositar:'));
    saldo = saldo + deposito;
    // alert ('ingresaste $' + deposito + ' tu nuevo saldo es de $' + saldo);
    alert (`Ingresaste $${deposito}. Tu nuevo saldo es de $${saldo}`);
    break;
  case '3':
    const montoExtaer = parseFloat(prompt('Ingrese el monto que desea a extraer:'));
    if(montoExtaer <= saldo) {
      saldo = saldo - montoExtaer; // saldo -= montoExtaer;
      alert (`Retiraste $${montoExtaer}. Tu nuevo saldo es de $${saldo}`);
    } else {
      alert('Fondos insuficientes');
    }
    break;
  default:
    alert('Opción no válida');
}