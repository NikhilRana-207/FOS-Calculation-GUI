const submit = async () => {

    let p = Number(document.getElementById('p').value);
    let b = Number(document.getElementById('b').value);
    let y = Number(document.getElementById('y').value);
    let yw = Number(document.getElementById('yw').value);
    let h = Number(document.getElementById('h').value);
    let z = Number(document.getElementById('z').value);
    var fosSeapage = (1 - (yw*h) / (y*z)) * (Math.tan(p) / Math.tan(b));

    document.getElementById('modal_text').innerText = 'Your value has been calculated.';
    document.getElementById('desc').innerText = 'Calculated Answer :';
    document.getElementById('desc').innerText += fosSeapage;

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

