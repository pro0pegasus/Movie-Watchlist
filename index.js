//Planning:

//Research bar input goes to the api key paramater 
    //if the search is invalid = show error msg in the DOM 
    
//searching for the movie, getting key and fetching again the movie for more data

//return the data and pass to the DOM 
    //html block that has elements from the api fetche (name, photo, filmMin, Genre, Plot, value)
        //filter? map and join? methods

//when +watchlist is clicked film data stores to the localstorage, and show post on my watchlist page 
    //replace +watchlist to -watchlist which mean to remove it from the localstorage 
        //if localstorage is empty show message in my whichlist and a link/button that will take you to the first page  
        
        
/*
steps:
0- get element by ids from the HTML sckeleton to js 
1- api call in a function.
2- addeventlistener triggers by a click (search button), get the search bar input(global variable), also call back the api function inside the eventlistner in another global variable.
3- function render html to the DOM, also should be called inside the eventlistner.
4- make a second eventlistner that listens to addToMyWatchlist btn, and saves the the data of the movies in localstorage
5- show the saved data(movies) in the second page (my watchlist page) from the localstorage(call render function inside the eventlistner???)
6- change tha the + addToMyWatchlist btn to - btn (delete from watch list, which means localstorage)
*/
//==========================================================================//

// make it a call back func + add it to an eventlistner for the search bar 


const searchBtn = document.getElementById('search-btn')
const searchBar = document.getElementById('input-data')
const pushData = document.getElementById('push-data')



searchBtn.addEventListener('click', async() => {
    
    const getFilmName = searchBar.value 
    
    const movies = await getMovies(getFilmName)
    render(movies)
    
})

function render(moviesParam){
    
    let html = ""
    
    for(let movie of moviesParam){
        
    html += `
            <div class="movie-card">
                <img src="${movie.Poster}" alt="Movie Poster"/>
                <div class="movie-details">
                    <h2>${movie.Title}
                        <span>
                            <i class="fa-solid fa-star"></i>
                            ${movie.imdbRating}
                        </span>
                    </h2>
                    <div class="movie-info">
                        <p>${movie.Runtime}</p>
                        <p>${movie.Genre}</p>
                        <button class="watchlist-btn">
                            <i class="fa-solid fa-circle-plus"></i>
                            <span class="btn-text">Watchlist</span>
                        </button>
                    </div>
                    <p class="movie-description">${movie.Plot}</p>
                </div>
            </div>
        `
    }
    document.getElementById('push-data').innerHTML = html
}


async function getMovies(film){

    const res = await fetch(`https://www.omdbapi.com/?s=${film}&apikey=100c0696`)
    const data = await res.json()

    const ids = data.Search.map(d => d.imdbID)
    let savedData = []

    
    for(let id of ids){
        
        const movieRes = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=100c0696`)
        const movie = await movieRes.json()

        savedData.push(movie)
    } 
    return savedData
}
    



