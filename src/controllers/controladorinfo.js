//obteniendo datos de la memoria

let peliculasConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))

console.log(peliculasConsultadaEnMemoria)




//let etiquestaimagenprincipal=document.getElementById("imagenPrincipal")

//asignando valores 


let etiquestaimagenPelicula=document.getElementById("imagenPelicula")
etiquestaimagenPelicula.src=peliculasConsultadaEnMemoria.imagen

let etiquetanombrePelicula=document.getElementById("nombrePelicula")

etiquetanombrePelicula.textContent=peliculasConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracion")

etiquetaDuracion.textContent=peliculasConsultadaEnMemoria.duracion




let etiquestasinopsis=document.getElementById("sipnosisPelicula")
etiquestasinopsis.textContent=peliculasConsultadaEnMemoria.sinopsis

let etiquestabanner=document.getElementById("banner")
etiquestabanner.src=peliculasConsultadaEnMemoria.banner