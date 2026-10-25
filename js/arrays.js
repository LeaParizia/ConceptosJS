//declarar un array vacio
const colores = [];
const peliculas = [ "Avatar", 10,  "Avengers: Endgame", "Avatar: The Way of Water", 
                    "Titanic", true, "Star Wars: Episode VII - The Force Awakens", 
                    "Avengers: Infinity War", "Spider-Man: No Way Home", false, 
                    "Inside Out 2", "Jurassic World", "The Lion King" ];

console.log(colores)
console.log(peliculas)

const div = document.getElementById('pantalla');

let textoHTML =  ' '


//mostrar un array por pantalla
textoHTML += '<ul>'
for(let i=0; i < peliculas.length; i++) {
  textoHTML += `<li>${peliculas[i]}</li>`
}
textoHTML += '</ul>'


//mostrar el html en pantalla
div.innerHTML = textoHTML
