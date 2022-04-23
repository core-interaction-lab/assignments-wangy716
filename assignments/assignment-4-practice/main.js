

const albumContainer = document.getElementById("album-container");

    const fetchContent = async (fetchUrl) => {
        return fetch(fetchUrl).then(data => data.json());
        //const response = await fetch(fetchurl).then(data => data.json());



    };

    const htmlDecode = (input) => {
        const e = document.createElement("div");
        e.innerHTML = input;
        return e.innerText;
    }

    const buildAlbums = albums => {       //1 json
        //response.items.forEach(item => {
        albums.forEach(item => {
            console.log(item)
            const imgEL = document.createElement("img");
            imgEL.setAttribute('src', item.images[0].url);
            albumContainer.append(imgEL);
        });
    };

    
    const buildEpisodes = episodes =>{    //2 json
        episodes.forEach(item => {
            console.log(item);
            const imgEL = document.createElement("img");
            imgEL.setAttribute('src', item.image.medium);
            albumContainer.append(imgEL);
        });
    };


    const buildStories = stories =>{    //3 json
        stories.forEach(item => {
            console.log(item);
            const container = document.createElement('article');
            const titleEL = document.createElement("h2");
            const bodyEL = document.createElement("div");

            titleEL.innerHTML = item.data.title;
            bodyEL.innerHTML = htmlDecode(item.data.selftext_html);

            container.append(titleEL, bodyEL);
            albumContainer.append(container);

        });
    };


    const url1 = 'https://interactionlab.space/data/assignment-4-1.json';
    const url2 = 'https://interactionlab.space/data/assignment-4-2.json';
    const url3 = 'https://interactionlab.space/data/assignment-4-3.json';

    const main = async () => {
        const response1 = await fetchContent(url1);
        const response2 = await fetchContent(url2);
        const response3 = await fetchContent(url3);

            //console.log(response);
            //console.log(response.items);
            buildAlbums(response1.items);   //1 json
            buildEpisodes(response2)        //2 json
            buildStories(response3.data.children) //3 json
    }
    //fetchContent('https://interactionlab.space/data/assignment-4-3.json');

    main();

