const fetchMovies = async()=>{
    const response = await fetch("https://api.airtable.com/v0/appyWR6D5q4xY7vlb/Table%201?api_key=keyd33PPhk9Hamm6D").then(data => data.json());

    console.log(response);

    const moviesContainer = document.getElementById("movies-container");
    
    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEL = document.createElement("article");
        const titleEL = document.createElement("div");
        const genreEL = document.createElement("div");
        const imdbURLEL = document.createElement("a");
        const releaseDateEL = document.createElement("div");
        const descriptionEl = document.createElement("div");
        const posterEl = document.createElement("img");

  
                                         /*must match*/
        titleEL.innerHTML = movie.fields.title;
        titleEL.classList.add("title");

        genreEL.innerHTML = movie.fields.genre;
        genreEL.classList.add("genre");

        imdbURLEL.href = movie.fields.imdbURL;
        imdbURLEL.target = "_blank";
        imdbURLEL.classList.add("imdb-link");
        imdbURLEL.innerHTML = "IMDB Page";

        releaseDateEL.innerHTML = movie.fields.releaseDate;
        releaseDateEL.classList.add("date");

        descriptionEl.innerHTML = movie.fields.description;
        descriptionEl.classList.add("description");

        posterEl.innerHTML = movie.fields.poster;
        posterEl.classList.add("poster");
        posterEl.width = 100;
        posterEl.height = 100;
       
       
        articleEL.append(titleEL,genreEL,imdbURLEL,releaseDateEL,descriptionEl,posterEl);

        /* titleEL.innerHTML = "tiitle";*/
        moviesContainer.appendChild(articleEL);
        moviesContainer.appendChild(posterEl);

    })


  /* multiple argument need ()*/
    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    

    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = 'my-link-${index + 1}';
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "green";
        })

    link.addEventListener('mouseout', (evt) => {
            link.style.color = linkColor;
    })
    });
};

fetchMovies();

/*async is you dont really know what gona be , you need wait till you make response(async must with await)*/