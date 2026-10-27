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