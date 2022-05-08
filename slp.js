const submit = async () => {

    let tanPhiSeapage = Number(document.getElementById('phiDashSeapage').value);
    let tanBetaSeapage = Number(document.getElementById('betaSeapage').value);
    let gammaSeapage = Number(document.getElementById('gammaSeapage').value);
    let hSeapage = Number(document.getElementById('heightSeapage').value);
    let wSeapage = Number(document.getElementById('wSeapage').value);
    let zSeapage = Number(document.getElementById('zSeapage').value);
    var fosSeapage = (1 - (gammaSeapage * wSeapage * hSeapage) / (gammaSeapage * zSeapage)) * (tanPhiSeapage / tanBetaSeapage);

    alert(fosSeapage);

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

