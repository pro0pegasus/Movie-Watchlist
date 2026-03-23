(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t=document.getElementById(`search-btn`),n=document.getElementById(`input-data`),r=document.getElementById(`icon-container`),i=document.getElementById(`push-data`),a=document.getElementById(`watchlist-section`),o=JSON.parse(localStorage.getItem(`watchlist`))||[];document.addEventListener(`DOMContentLoaded`,function(){a&&d(o)}),t&&t.addEventListener(`click`,async()=>{r.classList.toggle(`hidden`),l(await u(n.value))}),i?i.addEventListener(`click`,e=>{let t=e.target.closest(`.watchlist-btn`);if(!t)return;let n=t.dataset.id;s(n)}):a&&a.addEventListener(`click`,e=>{let t=e.target.closest(`.watchlist-btn`);if(!t)return;let n=t.dataset.id;c(n)});function s(t){let n=e.find(e=>e.imdbID===t);n&&(o.some(e=>e.imdbID===t)||(o.push(n),localStorage.setItem(`watchlist`,JSON.stringify(o))))}function c(e){let t=o.findIndex(t=>t.imdbID===e);t!==-1&&(o.splice(t,1),localStorage.setItem(`watchlist`,JSON.stringify(o)),d(o))}function l(e){let t=``;for(let n of e)t+=`
            <div class="movie-card">
                <img src="${n.Poster}" alt="Movie Poster"/>
                <div class="movie-details">
                    <h2>${n.Title}
                        <span>
                            <i class="fa-solid fa-star"></i>
                            ${n.imdbRating}
                        </span>
                    </h2>
                    <div class="movie-info">
                        <p>${n.Runtime}</p>
                        <p>${n.Genre}</p>
                        <button data-id='${n.imdbID}' class="watchlist-btn">
                            <i class="fa-solid fa-circle-plus"></i>
                            <span class="btn-text">Watchlist</span>
                        </button>
                    </div>
                    <p class="movie-description">${n.Plot}</p>
                </div>
            </div>
        `;document.getElementById(`push-data`).innerHTML=t}async function u(t){let n=(await(await fetch(`https://www.omdbapi.com/?s=${t}&apikey=100c0696`)).json()).Search.map(e=>e.imdbID);e=[];for(let t of n){let n=await(await fetch(`https://www.omdbapi.com/?i=${t}&apikey=100c0696`)).json();e.push(n)}return e}function d(e){let t=``;for(let n of e)t+=`
            <div class="movie-card">
                <img src="${n.Poster}" alt="Movie Poster"/>
                <div class="movie-details">
                    <h2>${n.Title}
                        <span>
                            <i class="fa-solid fa-star"></i>
                            ${n.imdbRating}
                        </span>
                    </h2>
                    <div class="movie-info">
                        <p>${n.Runtime}</p>
                        <p>${n.Genre}</p>
                        <button data-id='${n.imdbID}' class="watchlist-btn">
                            <i class="fa-solid fa-circle-minus"></i>
                            <span class="btn-text">Watchlist</span>
                        </button>
                    </div>
                    <p class="movie-description">${n.Plot}</p>
                </div>
            </div>
        `;document.getElementById(`watchlist-section`).innerHTML=t}