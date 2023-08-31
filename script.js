const apiKey = "d7f227b648028e51997922c8f2f27686"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2YyMjdiNjQ4MDI4ZTUxOTk3OTIyYzhmMmYyNzY4NiIsInN1YiI6IjY0ZWZkZWJjM2E5OTM3MDExY2JkNThhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iqb0flzrpYp6naJE12lXdQFvaBapyMd-OwGr_1_qEUQ"
const imagen = "https://image.tmdb.org/t/p//w500"

let boton = document.getElementById("searchButton");
let resultados = document.getElementById("results")

boton.addEventListener("click", (dato) => {
    dato.preventDefault();
    let searchInput = document.getElementById("searchInput");
    let valorTextoBusqueda = searchInput.value

    console.log(valorTextoBusqueda)

    if (valorTextoBusqueda == "") {
        resultados.textContent = "Error, debes ingresar el dato de un programa"
    } else {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${valorTextoBusqueda}`
        buscarPelicula(url)
        console.log("ok")
    }

})




function buscarPelicula(url) {

    fetch(url)
        .then(response => response.json())
        .then(response => mostrarDatos(response.results))
    // .catch(err => console.log("Error en el servidor, intentalo mas tarde"));
    

}


function mostrarDatos(response) {
    // let resultados = document.getElementById("results")
    resultados.innerHTML = ""

    if (resultados.length == 0) {
        resultados.textContent = "Ups, No se encontraron resultados"
    } else {
        response.forEach(element => {
            let movieDiv = document.createElement("div")
            movieDiv.classList.add("movie")
            let titulo = document.createElement("h3")
            titulo.textContent = element.title
            let resena = document.createElement("p")
            resena.textContent = element.overview
            let popularidad = document.createElement("p")
            popularidad.textContent = `Popularidad: ${element.popularity}`
            let lanzamiento = document.createElement("p")
            lanzamiento.textContent = `Fecha de lanzamiento: ${element.release_date}`
            let id = document.createElement("p")
            id.textContent = `id pelicula: ${element.id}`
            let poster = document.createElement("img")
            poster.src = `${imagen}${element.poster_path}`
          




            resultados.appendChild(movieDiv)
            resultados.appendChild(poster)
            resultados.appendChild(titulo)
            resultados.appendChild(id)
            resultados.appendChild(resena)
            resultados.appendChild(popularidad)
            resultados.appendChild(lanzamiento)
        });

    }
}
