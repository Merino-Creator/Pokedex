function smallPokemonCardTemplate(index) {
    return `
        <div class="small-pokemon-card">
            <div class="small-card-top">
                <h2>${allPokemon[index].name}</h2>
                <h2>ID</h2>
            </div>
            <div class="small-card-bottom">
                <div id="types"></div>
                <img src="" alt="">
            </div>
        </div>
    `
}