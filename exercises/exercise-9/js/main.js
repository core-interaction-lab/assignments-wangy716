const db = {
    id: 'appmZpeJEBhZW4PXA',
    table: 'lego',
    apiKey: 'keyd33PPhk9Hamm6D'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const slideContainer = document.getElementById('lego-container');
const prevbutton = document.getElementById('prev');
const nextbutton = document.getElementById('next');


const fetchLego = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    //console.log(response);
    buildSlideshow(response.records)
    return response.records;
}

const buildSlideshow = (legos) => {
    console.log(legos);
    console.log(buildSlide(legos[0]));
    //const slideContainer = document.getElementById('lego-container');
    //const prevbutton = document.getElementById('prev');
    //const nextbutton = document.getElementById('next');       
//*move to top give acess to all 

    slideContainer.append(buildSlide(legos[0]));

    let currentLego = 0;

    prevbutton.addEventListener('click', () => {
        if (currentLego === 0){
            currentLego = legos.length - 1;
        } else{
            currentLego = currentLego - 1;
        }

        const legoRecord = legos[currentLego];
        swapSlide(legoRecord);
        
        //const slideEl = buildSlide(legoRecord);
        //slideContainer.innerHTML = '';
        //slideContainer.append(slideEl);
//*duplicate funtions converge to one 
    });

    nextbutton.addEventListener('click', () => {
        if (currentLego === 99){
            currentLego = 0;
        } else{
            currentLego = currentLego + 1;
        }

        const legoRecord = legos[currentLego];
        swapSlide(legoRecord);
        
        //const slideEl = buildSlide(legoRecord);
        //slideContainer.innerHTML = '';
        //slideContainer.append(slideEl);
//*duplicate funtions converge to one 
    });

};

const swapSlide = (legoRecord) =>{
    const slideEl = buildSlide(legoRecord);
    slideContainer.innerHTML = '';
    slideContainer.append(slideEl);
};

const buildSlide = (lego) => {
    const legoContainer = document.createElement('article');

    if(lego.fields.Image){
        console.log(lego.fields.Image[0].url)
        const legoImage = document.createElement('img');
        legoImage.src = lego.fields.Image[0].url;
        legoContainer.append(legoImage);
    }

    if(lego.fields.name){
        const nameEL= document.createElement('p');
        nameEL.innerHTML = lego.fields.name;
        nameEL.classList.add =('name');
        legoContainer.append(nameEL);
    }

return legoContainer;

}

fetchLego();
