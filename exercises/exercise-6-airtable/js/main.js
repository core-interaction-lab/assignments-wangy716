const fetchMovies = async()=>{
    const response = await fetch("https://api.airtable.com/v0/appyWR6D5q4xY7vlb/Table%201?api_key=keyd33PPhk9Hamm6D").then(data => data.json());

    console.log(response);

    const moviesContainer = document.getElementById("movies-container");
    
    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEL = document.createElement("article");
        const titleEL = document.createElement("div");
        const genreEL = document.createElement("div");
        const imdbURLEL = document.createElement("div");
        const releaseDateEL = document.createElement("div");

        titleEL.innerHTML = movie.fields.title;
                                        /*must match*/
        genreEL.innerHTML = movie.fields.genre;
        imdbURLEL.innerHTML = movie.fields.imdbURL;
        releaseDateEL.innerHTML = movie.fields.releaseDate;
        
        articleEL.appendChild(titleEL);

        moviesContainer.appendChild(articleEL);

    })

};

fetchMovies();

/*async is you dont really know what gona be , you need wait till you make response(async must with await)*/