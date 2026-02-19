function smallPokemonCardTemplate(stats, index) {  // ich habe auf alle daten zugriff.
    let typesHTML = stats.types.map(typeObj => {  // ich erstelle ein HTML, dass eingefügt wird je nach anzahl der typen
        return `
            <p class="small-card-types type_${typeObj.type.name}">${typeObj.type.name}</p>
        `;
    }).join("");

    let mainType = stats.types[0].type.name;
    
    return `
        <div onclick="openDialog(${index})" class="small-pokemon-card bg_${mainType}">

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

function dialogTemplate(stats) {

    let mainType = stats.types[0].type.name;

    return `
        <div class="big-pokemon-card">
            <div class="big-card-top bg_${mainType}">
                <img src="${stats.sprites.other["official-artwork"].front_default}">
                <h3>${stats.name.toUpperCase()}</h3>
                <h3>#${stats.id}</h3>
            </div>
            <div class="big-card-bottom"></div>
        </div>
    `;
}