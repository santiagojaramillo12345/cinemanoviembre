let peliculas=[
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0"

    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc"
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1"
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84"
    },
    {
        nombre: "AMSTERDAMNUEVO",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FAMSTERDAMNUEVO1.jpg?alt=media&token=05e1293c-bc05-4530-b4b0-117530fb8f9e"
    },
    {
        nombre: "Black adam",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FBlack%20adam%20ultimonuevo.jpg?alt=media&token=cec193af-5c4e-4a12-b3e4-857df7aaf8ba"
    },
    {
        nombre: "EL CATACLISMO",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEL%20CATACLISMO1.jpg?alt=media&token=9c4edefc-0c8c-4ad6-85e4-9722c7f45d4a"
    },
    {
        nombre: "ESTAMOS HECHOS PARA AMARNOS",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FESTAMOS%20HECHOS%20PARA%20AMARNOS1.jpg?alt=media&token=aff94155-7bc1-4701-9603-94256366dd39"
    },
    {
        nombre: "LA MUJER REY NUEVO POSTER",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FLA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=33f9f767-7206-4dcb-a44a-1b486e963ca1"
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    }
]


//creamos una referencia al 
let etiquetafila=document.getElementById("fila")

//si ya tengo datos que normalmente llegan al front como un arreglo de objetos debemos recorrer y depurar dicha informacion

peliculas.forEach(function(pelicula){
    //para pintar la informacion de cada pelicula debemos aplicar una tecnica conocidad como traversing 
    //traversin =crear etiquestas html desde js
    
    let columna=document.createElement("div")
    //gerar kia de etiquetas(padres eh hijos)

    columna.classList.add("col")

    let tarjeta=document.createElement("div")

    tarjeta.classList.add("card","h-100","shadow")

let poster=document.createElement("img")
poster.classList.add("img-fluid","w-100")
poster.src=pelicula.poster


let duracion=document.createElement("p")

let nombre=document.createElement("h3")
nombre.classList.add("text-center","fw-bold")
nombre.textContent=pelicula.nombre


duracion.classList.add("text-start")
duracion.textContent="Duracion: "+pelicula.duracion+" Min"

//padres eh hijos el orden importa
etiquetafila.appendChild(columna)
columna.appendChild(tarjeta)

tarjeta.appendChild(poster)

tarjeta.appendChild(nombre)
tarjeta.appendChild(duracion)






})