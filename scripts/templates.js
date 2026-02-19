function smallPokemonCardTemplate(stats) {  // ich habe auf alle daten zugriff.
    let typesHTML = stats.types.map(typeObj => {  // ich erstelle ein HTML, dass eingefügt wird je nach anzahl der typen
        return `
            <p class="small-card-types type_${typeObj.type.name}">${typeObj.type.name}</p>
        `;
    }).join("");

    let mainType = stats.types[0].type.name;
    
    return `
        <div class="small-pokemon-card bg_${mainType}">

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
