function smallPokemonCardTemplate(stats) {  // ich habe auf alle daten zugriff.
    let typesHTML = stats.types.map(typeObj => {
        return `
            <p>${typeObj.type.name}</p>
        `;
    }).join("");
    
    return `
        <div class="small-pokemon-card">

            <div class="small-card-top">
                <h2>${stats.name.toUpperCase()}</h2>
                <h2>#${stats.id}</h2>
            </div>

            <div class="small-card-bottom">
                <div class="small-card-type">
                    ${typesHTML}
                </div>
                <img class="small-card-sprite" src="${stats.sprites.front_default}">
            </div>

        </div>
    `;
}
