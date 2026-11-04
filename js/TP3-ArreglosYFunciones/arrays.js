const mostrarPeliculas = (titulo) => {

  //mostrar un array

  textoHTML += `<h2 class="my-3">${titulo}</h2>`;

  textoHTML += '<ul class= "list-group">';

  for (let i = 0; i < peliculas.length; i++) {

    textoHTML += `<li class= "list-group-item">${peliculas[i]}</li>`;

  }

  textoHTML += "</ul>";

  //mostrar el html en pantalla

  div.innerHTML = textoHTML;

};
//declarar un array vacio
const colores = [];
const peliculas = [
  "Avatar",
  10,
  "Avengers: Endgame",
  "Avatar: The Way of Water",
  "Titanic",
  true,
  "Star Wars: Episode VII - The Force Awakens",
  "Avengers: Infinity War",
  "Spider-Man: No Way Home",
  false,
  "Inside Out 2",
  "Jurassic World",
  "The Lion King",
];

console.log(colores);
console.log(peliculas);
console.log(peliculas.length);
console.log(peliculas[6]);

const div = document.getElementById("pantalla");

let textoHTML = " ";
mostrarPeliculas('Array de peliculas inicial - total de peliculas: ' + peliculas.length)

//agregar elementos en el array
peliculas.unshift(false,"Sin miedo al exito") //agregamos elementos al principio del array
mostrarPeliculas("agregamos peliculas al inicio - total de peliculas: " + peliculas.length)

peliculas.push(true, "rapidos y furiosos", 2026) // agregamos elementos al final del array
mostrarPeliculas("agregamos peliculas al final - total de peliculas: " + peliculas.length)

peliculas.splice(3, 0, "doomsdays") //agregamos elementos en medio del array
mostrarPeliculas("agregamos una pelicula en el medio del array - total de peliculas: " + peliculas.length)

peliculas.shift();
mostrarPeliculas('eliminamos una pelicula del inicio del array - total peliculas ' + peliculas.length)

peliculas.pop()
mostrarPeliculas('eliminamos una pelicula del final del array - total peliculas ' + peliculas.length)

//peliculas.splice(3, 2) borrar dos elementos del array
//peliculas.splice(3) borrar todos los elementos desde la posicion 3 inclusive

peliculas.splice(3, 1)
mostrarPeliculas('eliminamos una pelicula del medio del array - total peliculas: ' + peliculas.length)

//modificar elementos del array
peliculas[5] = "godzilla x kong: supernova"
mostrarPeliculas("modificamos una pelicula del medio del array - total peliculas: " + peliculas.length)





