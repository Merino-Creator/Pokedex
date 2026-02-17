function init() {
    addSmallPokemonCard();
}

function addSmallPokemonCard() {
    let smallCardRef = document.getElementById('mainContainer');

    smallCardRef.innerHTML += smallPokemonCardTemplate();
}