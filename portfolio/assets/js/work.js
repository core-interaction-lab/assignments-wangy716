const selectEl = document.getElementById('select');
const iframeEl = document.querySelector('.page-iframe');

selectEl.addEventListener('change', evt => {
    console.log(evt);
    const value = evt.target.value;
    if (value) {
        const href = `./${value}.html`;
        iframeEl.src = href;
    }
});

	var x;
	var person=prompt("WHO IS THERE?","enter your name");
	if (person!=null && person!=""){
	    x="Hiiii " + person + "! Welcome to E's Site!";
	    document.getElementById("demo").innerHTML=x;
	}