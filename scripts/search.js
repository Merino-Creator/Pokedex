async function searchPokemon(query) {
    let container = document.getElementById('mainContainer');
    let showMore = document.getElementById("showMoreButton");
    query = query.toLowerCase().trim();

    if (!query) {
        container.innerHTML = "";
        showMore.style.display = "block";
        await addSmallPokemonCard();
        return;
    }

    if (query.length < 3) {
        return showSearchMessage(container, showMore, "please be more specific");
    }

    const filtered = filterPokemon(query);

    if (!filtered.length) {
        return showSearchMessage(container, showMore, "couldn't find a Pokémon with that name");
    }

    showMore.style.display = "none";
    renderFilteredPokemon(filtered, container);
}

function filterPokemon(query) {
    return allPokemon
        .map((poke, index) => ({ ...poke, originalIndex: index }))
        .filter(poke => poke.name.toLowerCase().includes(query));
}

function showSearchMessage(container, showMore, message) {
    container.innerHTML = `<p>${message}</p>`;
    showMore.style.display = "none";
}

async function renderFilteredPokemon(list, container) {
    container.innerHTML = "";

    for (let poke of list) {
        let stats = await fetchPokeStats(poke.originalIndex);
        container.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(stats, poke.originalIndex)
        );
    }
}