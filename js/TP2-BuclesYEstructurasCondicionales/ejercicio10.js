/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 

Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 

Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


*********Si una variable debe reiniciarse en cada vuelta de un bucle, normalmente se declara dentro de ese bucle.

*********Si una variable debe recordar información de vueltas anteriores, normalmente se declara fuera.



const filas = parseInt(prompt('ingrese un numero de filas'))

const columnas = parseInt(prompt('ingrese un numero de columnas'))

let celda = filas * columnas

for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){

  //aqui quiero dibujar 1 fila

  let textoFilas = '';  //Lo que está haciendo es crear una variable de tipo string vacío.

  for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){

    textoFilas += celda + '\t' el += va agregando contenido al string.
    
    celda--
  }
  console.log(textoFilas)
  document.write(textoFilas + '<br>')
}
*/

//mismo ejercicio pero con tabla html


const filas = parseInt(prompt('ingrese un numero de filas'))

const columnas = parseInt(prompt('ingrese un numero de columnas'))

let celda = filas * columnas

const div = document.getElementById('pantalla')

let textoFilas = '';

textoFilas += `<table class="table table-striped">

  <tbody>`

//dibujar filas y tablas
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
  //aqui quiero dibujar 1 fila
  textoFilas += `<tr>`
  for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
    textoFilas += `<td>${celda}</td>`
    celda--
  }
  textoFilas += `</tr>`
}

textoFilas += `</tbody></table>`

div.innerHTML = textoFilas;