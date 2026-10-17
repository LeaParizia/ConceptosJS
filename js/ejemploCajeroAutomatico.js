//console.log (confirm('quieres realizar otra operacion'))

let saldo = 5000; // saldo inicial  // la variable vive en el ambito donde fue creada

do {
  const opcion = prompt(
    "Ingrese una opción: 1 - consultar saldo, 2 - ingresar dinero, 3 - extraer dinero",
  );

  switch (opcion) {
    case "1":
    case "saldo": // se puede usar de esta manera tambien
      alert("Su saldo es de $" + saldo);
      break;
    case "2":
      const deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
      saldo = saldo + deposito;
      // alert ('ingresaste $' + deposito + ' tu nuevo saldo es de $' + saldo);
      alert(`Ingresaste $${deposito}. Tu nuevo saldo es de $${saldo}`);
      break;
    case "3":
      const montoExtaer = parseFloat(
        prompt("Ingrese el monto que desea a extraer:"),
      );
      if (montoExtaer <= saldo) {
        saldo = saldo - montoExtaer; // saldo -= montoExtaer;
        alert(`Retiraste $${montoExtaer}. Tu nuevo saldo es de $${saldo}`);
      } else {
        alert("Fondos insuficientes");
      }
      break;
    default:
      alert("Opción no válida");
  }
} while (confirm("quieres realizar otra operacion"));
