async function searchPokemon(query) {
    let container = document.getElementById('mainContainer');
    let showMore = document.getElementById("showMoreButton");
    let result = handleSearchQuery(query);
    if (result.type === "default") {
        container.innerHTML = "";
        showMore.style.display = "block";
        await addSmallPokemonCard();
        return;
    }
    if (result.type === "error") {
        return showSearchMessage(container, showMore, result.message);
    }
    showMore.style.display = "none";
    renderFilteredPokemon(result.data, container);
}

function handleSearchQuery(query) {
    query = query.toLowerCase().trim();
    if (!query) {
        return { type: "default" };
    }
    if (query.length < 3) {
        return { type: "error", message: "please be more specific" };
    }
    const filtered = filterPokemon(query);
    if (!filtered.length) {
        return { type: "error", message: "couldn't find a Pokémon with that name" };
    }
    return { type: "success", data: filtered };
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