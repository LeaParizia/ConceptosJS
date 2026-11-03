/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
……. */

let piramide = "";

for (let i = 1; i <= 30; i++) //controla que numero tocaria 
  {
    for(let h = 1; h <= i; h++) //controla cuantas veces se repite el numero
      {
        piramide += i;
      }
      piramide += "<br>";
}
//console.log(piramide)
document.write(piramide)