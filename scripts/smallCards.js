let renderCount = 20;
let smallCardRef = document.getElementById('mainContainer');

async function loadMore() {
    renderCount += 20;
    await addSmallPokemonCard();

    if (renderCount >= allPokemon.length) {
        showMoreButton.style.display = "none";
    }
}

async function addSmallPokemonCard() {  // ich bearbeite die funktion so, dass die neu erworbenen daten verwendet werden
    let start = smallCardRef.children.length;   // wie viele karten existieren schon? und danach ist der start punkt  
    let max = Math.min(allPokemon.length, renderCount);  // sucht sich die niedrigere zahl der beiden aus, und verwendet diese um die anzahl der geladenen karten zu bestimmen

    showSpinner();
    let startTime = Date.now();

    for (let index = start; index < max; index++) {
        if (!pokeStats[index]) {
            await fetchPokeStats(index);  // hier sorge ich dafür, dass die daten gefetched werden, fals sie nicht da sein sollten.
        }   
    }

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(1000 - elapsed, 0);
    await wait(remaining);  // ich lasse mir ausrechnen wie lange der spinner drehen soll. aber minimum 1 sekunde.

    hideSpinner();

    for (let index = start; index < max; index++) {  // ich füge erst die templates ein, nachdem ich den spinner entfernt habe
        smallCardRef.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(pokeStats[index], index)  // dann übergebe ich den parameter an mein template, damit ich damit nun auf alle daten zugreifen kann
        );
    }
}