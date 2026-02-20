let renderCount = 20;

async function loadMore() {
    renderCount += 20;
    await addSmallPokemonCard();

    if (renderCount >= allPokemon.length) {
        showMoreButton.style.display = "none";
    }
}

async function addSmallPokemonCard() {  // ich bearbeite die funktion so, dass die neu erworbenen daten verwendet werden
    let smallCardRef = document.getElementById('mainContainer');
    let start = smallCardRef.children.length;   // wie viele karten existieren schon? und danach ist der start punkt  
    let max = Math.min(allPokemon.length, renderCount);  // sucht sich die niedrigere zahl der beiden aus, und verwendet diese um die anzahl der geladenen karten zu bestimmen

    for (let index = start; index < max; index++) {  // currentIndex ist oben schon festgelegt, daher braucht man es nicht nochmal aufführen am anfang der schleife
        let stats = await fetchPokeStats(index);  // hier sorge ich dafür, dass ich jeweils die daten für jedes pokemon hole, da ich hier soweiso durch alle pokemon durchiteriere.
        smallCardRef.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(stats, index)  // dann übergebe ich den parameter an mein template, damit ich damit nun auf alle daten zugreifen kann
        );
    }
}