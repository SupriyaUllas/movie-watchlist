const apiKey = "c1189765";
let currentMovie = null;

async function searchMovie() {
    const movieName = document.getElementById("movieInput").value;

    const res = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    const movie = await res.json();

    const resultDiv = document.getElementById("result");

    if (movie.Response === "False") {
        resultDiv.innerHTML = `<h3 class="notfound">Movie Not Found</h3>`;
        return;
    }

    // Fake platform logic
    let platform = "Netflix";
    if (movie.imdbRating > 8) platform = "Amazon Prime";
    if (movie.Year < 2010) platform = "Hotstar";

    // Store movie globally
    currentMovie = {
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        rating: movie.imdbRating,
        plot: movie.Plot,
        platform: platform
    };

    resultDiv.innerHTML = `
        <div class="card">
            <img src="${movie.Poster}">
            <h2>${movie.Title}</h2>
            <p><b>Year:</b> ${movie.Year}</p>
            <p><b>Rating:</b> ${movie.imdbRating}</p>
            <p><b>Plot:</b> ${movie.Plot}</p>
            <p><b>Platform:</b> ${platform}</p>
            <button onclick="addMovie()">Add to Watchlist</button>
        </div>
    `;
}

async function addMovie() {
    if (!currentMovie) return;

    await fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(currentMovie)
    });

    loadWatchlist();
}

async function loadWatchlist() {
    const res = await fetch("/watchlist");
    const movies = await res.json();

    const watchlistDiv = document.getElementById("watchlist");
    watchlistDiv.innerHTML = "";

    movies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <img src="${movie.poster}">
            <h3>${movie.title}</h3>
            <p><b>Year:</b> ${movie.year}</p>
            <p><b>Rating:</b> ${movie.rating}</p>
            <p><b>Plot:</b> ${movie.plot}</p>
            <p><b>Platform:</b> ${movie.platform}</p>
            <button onclick="deleteMovie('${movie._id}')">Delete</button>
        `;
        watchlistDiv.appendChild(div);
    });
}

async function deleteMovie(id) {
    await fetch(`/delete/${id}`, {
        method: "DELETE"
    });

    loadWatchlist();
}

loadWatchlist();