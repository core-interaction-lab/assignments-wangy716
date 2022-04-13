const db = {
    id: 'appmZpeJEBhZW4PXA',
    table: 'lego',
    apiKey: 'keyd33PPhk9Hamm6D'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchLego = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);


    const myObject={
        title:'lego',
        year:'1234',
    }
    console.log(myObject.year);


    const myArray=['hi',123,'lego'];
    console.log(myArray[0]);


const container = document.getElementById('lego-container');

    response.records.forEach((lego)=>{
        console.log(lego);
        if(lego.fields.Image){
            console.log(lego.fields.Image[0].url)
            const legoImage = document.createElement('img');

           // legoImage.src = lego.fields.Image[0].url;
            legoImage.setAttribute('src', lego.fields.Image[0].url)

            container.append(legoImage);
        }

        if(lego.fields.name){
            const nameEL= document.createElement('p');
            nameEL.innerHTML = lego.fields.name;
            nameEL.classList.add =('name')
            container.append(nameEL);
        }
    });
};

fetchLego();