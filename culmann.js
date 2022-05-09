const submit = async () => {

    let c = Number(document.getElementById('c').value);
    let l = Number(document.getElementById('l').value);
    let w = Number(document.getElementById('w').value);
    let t = Number(document.getElementById('t').value);
    let p = Number(document.getElementById('p').value);
    var ans = (c*l + w*Math.cos(t*Math.PI/180)*Math.tan(p*Math.PI/180))/(w*Math.sin(t*Math.PI/180));

    document.getElementById('modal_text').innerText = 'Your value has been calculated.';
    let a = document.getElementById('desc').innerText = 'Calculated Answer :';
    document.getElementById('desc').innerText += ans;

    return;
}


const submitEvent = () => {
    document.getElementById('submitButton').removeEventListener('click', submitEvent);
    submit()
    document.getElementById('modal').style.display = 'block'
    scrollTo(0, 0);
}

document.getElementById('submitButton').addEventListener('click', submitEvent);

document.getElementById('close').addEventListener('click', () => {
    location.reload();
})

