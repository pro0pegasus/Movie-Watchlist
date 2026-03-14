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

let savedData = []

fetch('https://www.omdbapi.com/?s=Blade Runner&apikey=100c0696')
    .then(res => res.json())
    .then(data => {
        const id = data.Search.map(d => d.imdbID)
        // This will 
        for(let eachId of id){
            fetch(`https://www.omdbapi.com/?i=${eachId}&apikey=100c0696`)
                .then(res => res.json())
                .then(result => {
                    // console.log(result)
                    for (let i=0; i< result.length; i++){
                        savedData.push(result[i])
                    }

                    })
            }
        })
        
        console.log(savedData)
