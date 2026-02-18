function smallPokemonCardTemplate(stats) {  // ich habe auf alle daten zugriff.
    return `
        <div class="small-pokemon-card">
            <div class="small-card-top">
                <h2>${stats.name.toUpperCase()}</h2>
                <h2>#${stats.id}</h2>
            </div>
            <div class="small-card-bottom">
                <div id="smallCardType"></div>
                <img class="small-card-sprite" src="${stats.sprites.front_default}">
            </div>
        </div>
    `
}

function smallCardTypeTemplate(stats) {
    return`
        <p>${stats.types[0].type.name}</p>
    `
}