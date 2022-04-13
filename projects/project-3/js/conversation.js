let data = {}
document.getElementById('w').addEventListener('click', function() {
    data['tone'] = 'w'
    // red yellow pink orange white
    let arr = ['red', 'yellow', 'pink', 'orange', 'white']
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('t' + i).addEventListener('click', function() {
            chooseTone(arr[i])
        })
    }
});

document.getElementById('c').addEventListener('click', function() {
    data['tone'] = 'c'
    // array of black blue brown green grey
    let arr = ['black', 'blue', 'brown', 'green', 'grey']
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('t' + i).addEventListener('click', function() {
            chooseTone(arr[i])
        })
    }


});

document.getElementById('m').addEventListener('click', function() {
    data['gender'] = 'm'
    localStorage.setItem('data', JSON.stringify(data))

})

document.getElementById('f').addEventListener('click', function() {
    data['gender'] = 'f'
    localStorage.setItem('data', JSON.stringify(data))
})


function chooseTone(tone) {
    data['primarycolor'] = tone
    localStorage.setItem('data', JSON.stringify(data))
}



