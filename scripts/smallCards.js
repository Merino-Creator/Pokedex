let renderCount = 20;

function loadMore() {
    renderCount += 20;
    addSmallPokemonCard();

    if (renderCount >= allPokemon.length) {
        showMoreButton.style.display = "none";
    }
}

async function addSmallPokemonCard() {  // ich bearbeite die funktion so, dass die neu erworbenen daten verwendet werden
    let smallCardRef = document.getElementById('mainContainer');

    let start = smallCardRef.children.length;   // wie viele karten existieren schon? und danach ist der start punkt

    let max = Math.min(allPokemon.length, renderCount);  // sucht sich die niedrigere zahl der beiden aus, und verwendet diese um die anzahl der geladenen karten zu bestimmen

    for (let index = start; index < max; index++) {
        let stats = await fetchPokeStats(index);  // hier sorge ich dafür, dass ich jeweils die daten für jedes pokemon hole, da ich hier soweiso durch alle pokemon durchiteriere.
        smallCardRef.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(stats)  // dann übergebe ich den parameter an mein template, damit ich damit nun auf alle daten zugreifen kann
        );
    }
}