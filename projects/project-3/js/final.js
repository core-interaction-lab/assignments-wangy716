const db = {
    id: 'appmZpeJEBhZW4PXA',
    table: 'lego',
    apiKey: 'keyd33PPhk9Hamm6D'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchLego = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());


    let data = localStorage.getItem('data');
    if (!data) {
        return;
    }
    data = JSON.parse(data)

    let legos = response.records.filter(record => record.fields.tone.toLowerCase() === data.tone?.toLowerCase() &&
        record.fields.primarycolor.toLowerCase() === data.primarycolor?.toLowerCase() &&
        record.fields.gender.toLowerCase() === data.gender?.toLowerCase())
    // random legos 0-100

    console.log(legos)

    let lego = null

    if (legos.length)
        lego = legos[Math.floor(Math.random() * legos.length)]
    else {
        lego = response.records[Math.floor(Math.random() * response.records.length)]
    }

    document.getElementById('image').src = lego.fields.Image[0].url;
    document.getElementById('name').innerHTML = lego.fields.name;
    document.getElementById('series').innerHTML = lego.fields.year;
    document.getElementById('tag').innerHTML = lego.fields.tag;
    // response.records.forEach((lego) => {
    //     console.log(lego);
    //     if (lego.fields.Image) {
    //         console.log(lego.fields.Image[0].url)
    //         const legoImage = document.getElementById('result-image');

    //         // legoImage.src = lego.fields.Image[0].url;
    //         legoImage.setAttribute('src', lego.fields.Image[0].url)

    //         container.append(legoImage);
    //     }

    //     if (lego.fields.name) {
    //         const nameEL = document.getElementById('result-name');
    //         nameEL.innerHTML = lego.fields.name;
    //         nameEL.classList.add = ('name')
    //         container.append(nameEL);
    //     }
    // });
};

fetchLego();

const logoImage = document.getElementById('resul-image');