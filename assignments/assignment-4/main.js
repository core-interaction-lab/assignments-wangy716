

const albumContainer = document.getElementById("album-container");

    const fetchContent = async () => {
        const response = await fetch('https://interactionlab.space/data/assignment-4-1.json').then(data => data.json());
    console.log(response.items);

    response.items.forEach(item => {
        console.log(item)
        const imgEL = document.createElement("img");
        imgEL.setAttribute('src', item.images[0].url);
        albumContainer.append(imgEL);
        });
    };


    






    fetchContent();


