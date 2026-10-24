// funciones: bloque de codigo aislado que se puede reutilizar

//funciones sin parametros

function saludar(){
  alert("Hola Mundo!")
}

//invocar una funcion
saludar();

function saludarPersona(nombre){
  alert("Hola " + nombre + " !!")
}

const nombre = prompt('ingresa tu nombre')
saludarPersona(nombre)
saludarPersona('LEANDRO')