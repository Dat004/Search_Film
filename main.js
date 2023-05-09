key = 'a9071c97'

function search() {
    const input = document.querySelector('input[type="text"]')
    const body = document.querySelector('.body')
    
    input.addEventListener('change', function() {

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&t=${input.value}`)
            .then(resp => resp.json())
            .then(data => {    
                if(data.Response === 'True') {
                    body.innerHTML = `
                        <section>
                            <div class="info">
                                <div class="poster">
                                    <img src="${data.Poster}" alt="">
                                </div>

                                <div class="title">
                                    <h3 class="name_film">
                                        ${data.Title}
                                    </h3>
                                    <p class="rank">
                                        <i class="fa-solid fa-star"></i> ${data.imdbRating}
                                    </p>
                                    <p class="watch">
                                        <span class="rated">${data.Rated}</span>
                                        <span class="year">${data.Year}</span>
                                        <span class="runtime">${data.Runtime}</span>
                                    </p>
                                    <p class="category">
                                        <a href="">Comedy</a>
                                        <a href="">Crima</a>
                                        <a href="">Fantasy</a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    
                        <aside>
                            <div class="content">
                                <h4>Plot:</h4>
                                <span>
                                    ${data.Plot}
                                </span>
                            </div>

                            <div class="content">
                                <h4>Cast:</h4>
                                <span>
                                    ${data.Actors}
                                </span>
                            </div>
                        </aside>    
                    `
                } else {
                    body.innerHTML = `<div class="found">
                        <span>${data.Error}</span>
                    </div>` 
                }
            })
    })
}

search()


