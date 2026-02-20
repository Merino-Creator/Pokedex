let renderCount = 20;
let currentIndex = 0;  // wegen spinner seperat anfangen zu zählen, sonst wird der spinner zu position 1 im count und das erste pokemon wird übersprungen. für die for schleife unten

async function loadMore() {
    showSpinner();
    renderCount += 20;
    await addSmallPokemonCard();

    if (renderCount >= allPokemon.length) {
        showMoreButton.style.display = "none";
    }
}

async function addSmallPokemonCard() {  // ich bearbeite die funktion so, dass die neu erworbenen daten verwendet werden
    let smallCardRef = document.getElementById('mainContainer');
    let max = Math.min(allPokemon.length, renderCount);  // sucht sich die niedrigere zahl der beiden aus, und verwendet diese um die anzahl der geladenen karten zu bestimmen

    for (; currentIndex < max; currentIndex++) {  // currentIndex ist oben schon festgelegt, daher braucht man es nicht nochmal aufführen am anfang der schleife
        let stats = await fetchPokeStats(currentIndex);  // hier sorge ich dafür, dass ich jeweils die daten für jedes pokemon hole, da ich hier soweiso durch alle pokemon durchiteriere.
        smallCardRef.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(stats, currentIndex)  // dann übergebe ich den parameter an mein template, damit ich damit nun auf alle daten zugreifen kann
        );
    }

    hideSpinner();
}