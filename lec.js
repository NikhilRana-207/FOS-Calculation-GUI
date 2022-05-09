const submit = async () => {

    let Phi = Number(document.getElementById('phiDash').value);
    let Beta = Number(document.getElementById('beta').value);
    var fosInfinite = Math.tan(Phi*Math.PI/180) / Math.tan(Beta*Math.PI/180);

    document.getElementById('modal_text').innerText = 'Your value has been calculated.';
    let a = document.getElementById('desc').innerText = 'Calculated Answer :';
    document.getElementById('desc').innerText += fosInfinite;

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

