let peliculas=[


        {
            nombre:"La Maldicion",
            duracion:90,
            poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEstrenos%2FLaMaldicion.jpg?alt=media&token=d8cca8a4-10c0-47b3-9594-873b6ebf1a40"
            ,sinopsis: "Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura."


            
        },


        {
            nombre:"Un Mundo Extraño",
            duracion:120,
            poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEstrenos%2FUnMundoExtra%C3%B1o.jpg?alt=media&token=bba7a05a-9a58-4116-ac3d-768b644acccf"
            ,sinopsis: "Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura."
        },

        {
            nombre:"El Menú",
            duracion:130,
            poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEstrenos%2FelMenu.jpg?alt=media&token=286b1007-cff7-4b7a-9340-c0e18ae1e3d8"
            ,sinopsis: "Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura."
        },

        {
            nombre:"La LLorona",
            duracion:60,
            poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEstrenos%2FlaLLorona.jpg?alt=media&token=1756e850-fea1-4073-90ca-844f567b946a"
            ,sinopsis: "Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura."
        },      {
            nombre:"La LLorona",
            duracion:100,
            poster:"   https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEstrenos%2FmarDeSangre.png?alt=media&token=caf07b12-d3cf-45a2-9b3b-6f2852549f9c"
            ,sinopsis: "Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura."
        },

     

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


let duracion=document.createElement("h5")



let nombre=document.createElement("h3")
nombre.classList.add("text-center","fw-bold")
nombre.textContent=pelicula.nombre




duracion.classList.add("text-start")
duracion.textContent="Duracion: "+pelicula.duracion+" Min"

let  sinopsis=document.createElement("p")
sinopsis.textContent=pelicula.sinopsis



//padres eh hijos el orden importa
etiquetafila.appendChild(columna)
columna.appendChild(tarjeta)

tarjeta.appendChild(poster)

tarjeta.appendChild(nombre)
tarjeta.appendChild(duracion)
tarjeta.appendChild(sinopsis)





})