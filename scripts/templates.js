function smallPokemonCardTemplate(stats) {
    return `
        <div class="small-pokemon-card">
            <div class="small-card-top">
                <h2>${stats.name}</h2>
                <h2>${stats.id}</h2>
            </div>
            <div class="small-card-bottom">
                <div id="${stats.types[0].type.name}"></div>
                <img src="${stats.sprites.front_default}">
            </div>
        </div>
    `
}