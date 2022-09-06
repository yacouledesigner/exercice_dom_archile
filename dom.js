function augmenter(showIdValue, priceIdValue) {
    let priceId = document.getElementById(priceIdValue);
    let showId = document.getElementById(showIdValue);
    showId.innerText = parseInt(showId.innerText) + 1;
    priceId.innerText = parseFloat(priceId.innerText) + 
    (parseFloat(priceId.innerText)/(showId.innerText - 1));
}

function diminuer(showIdValue, priceIdValue) {
    let priceId = document.getElementById(priceIdValue);
    let showId = document.getElementById(showIdValue);
    if (showId.innerText > 1) {
        showId.innerText = parseInt(showId.innerText) - 1;
        priceId.innerText = parseFloat(priceId.innerText) -  
        (parseFloat(priceId.innerText)/showId.innerText);
    }
}

// function acheter(buyValue) {
    
// }