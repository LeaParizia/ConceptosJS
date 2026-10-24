const filas = parseInt(prompt('ingrese un numero de filas'))
const columnas = parseInt(prompt('ingrese un numero de columnas'))
let celda = filas * columnas

for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
  //aqui quiero dibujar 1 fila
  let textoFilas = '';
  for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
    textoFilas += celda + '\t'
    celda--
  }
  console.log(textoFilas)
}