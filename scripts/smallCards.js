let renderCount = 20;
let smallCardRef = document.getElementById('mainContainer');

async function loadMore() {
    renderCount += 20;
    await addSmallPokemonCard();

    if (renderCount >= allPokemon.length) {
        showMoreButton.style.display = "none";
    }
}

async function addSmallPokemonCard() {
    let start = smallCardRef.children.length;
    let max = Math.min(allPokemon.length, renderCount);

    showSpinner();
    let startTime = Date.now();

    for (let index = start; index < max; index++) {
        if (!pokeStats[index]) {
            await fetchPokeStats(index);
        }   
    }

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(1000 - elapsed, 0);
    await wait(remaining);

    hideSpinner();

    for (let index = start; index < max; index++) {
        smallCardRef.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(pokeStats[index], index)
        );
    }
}