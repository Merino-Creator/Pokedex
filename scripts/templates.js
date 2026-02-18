function smallPokemonCardTemplate(stats) {  // ich habe auf alle daten zugriff.
    let typesHTML = stats.types.map(typeObj => {  // ich erstelle ein HTML, dass eingefügt wird je nach anzahl der typen
        return `
            <p class="small-card-types">${typeObj.type.name}</p>
        `;
    }).join("");
    
    return `
        <div class="small-pokemon-card">

            <div class="small-card-top">
                <h2>${stats.name.toUpperCase()}</h2>
                <h2>#${stats.id}</h2>
            </div>

            <div class="small-card-bottom">
                <div class="small-card-types-box">
                    ${typesHTML}
                </div>
                <img class="small-card-sprite" src="${stats.sprites.front_default}">
            </div>

        </div>
    `;
}
