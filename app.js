const xhr = new XMLHttpRequest()
const movies = document.querySelector('#movies')

xhr.open('GET', './movies.json', true)
xhr.addEventListener('load', e => {
  let moviesInfo
  let moviesTemplate = ''
  if (xhr.status >= 200 && xhr.status <= 400) {
    moviesInfo = JSON.parse(xhr.responseText)
    console.log(moviesInfo, moviesInfo['movies'])

    moviesInfo['movies'].forEach(movie => {
      moviesTemplate += `
      <div class="col" id="movies">
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="${movie.poster}" alt="Card image cap">
        <div class="card-block">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">year: ${movie.year}</p>
          <p class="card-text">Genres: ${movie.genres}</p>
          <p class="card-text">Director: ${movie.director}</p>
          <p class="card-text">Runtime: ${movie.runtime}</p>
          
          </div>
        </div>
      </div>
      `
    })
  } else {
    moviesTemplate = `<b>El servidor no responde. Error Nº${xhr.status}:<mark>${xhr.statusText}</mark></b>`
  }

  movies.innerHTML = moviesTemplate
})
xhr.send()
