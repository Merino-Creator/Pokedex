async function init() {
    showSpinner();
    await savePokeData();
    await addSmallPokemonCard();
}

function showSpinner() {
    document.getElementById("mainContainer").innerHTML += spinnerTemplate();
}

function hideSpinner() {
    document.querySelector(".spinner-container")?.remove();
}