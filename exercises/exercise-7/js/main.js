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
  
                                         /*must match*/
        titleEL.innerHTML = movie.fields.title;
        genreEL.innerHTML = movie.fields.genre;

        imdbURLEL.href = movie.fields.imdbURL;
        imdbURLEL.target = "_blank";
        imdbURLEL.classList.add("imdb-link")
        imdbURLEL.innerHTML = "IMDB Page";

        releaseDateEL.innerHTML = movie.fields.releaseDate;
        

        articleEL.append(titleEL,genreEL,imdbURLEL,releaseDateEL);

        /* titleEL.innerHTML = "tiitle";*/
        moviesContainer.appendChild(articleEL);

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