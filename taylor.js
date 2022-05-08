const submit = async () => {
    let c = Number(document.getElementById('foundBy').value);
    let sn = Number(document.getElementById('name').value);
    let gamma = Number(document.getElementById('location').value);
    let h = Number(document.getElementById('height').value);
    var fosFinite = (c) / (sn * gamma * h);

    document.getElementById('modal_text').innerText = 'Your value has been calculated.';
    let a = document.getElementById('desc').innerText = 'Calculated Answer :';
    document.getElementById('desc').innerText += fosFinite;

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

