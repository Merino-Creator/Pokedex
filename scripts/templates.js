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
                <img class="big-card-img" src="${stats.sprites.other["official-artwork"].front_default}">
                <div class="big-card-top-text">
                    <h3>${stats.name.toUpperCase()}</h3>
                    <h3>#${stats.id}</h3>
                </div>
            </div>

            <div id="bigCardBottom" class="big-card-bottom">
                <div class="tab-bar">
                    <button class="tab-btn" onclick="showTab('about', ${stats.id})">About</button>
                    <button class="tab-btn" onclick="showTab('base', ${stats.id})">Base Stats</button>
                    <button class="tab-btn" onclick="showTab('moves', ${stats.id})">Moves</button>
                    <button class="tab-btn" onclick="showTab('abilities', ${stats.id})">Abilities</button>
                </div>
                <div id="tabContent" class="tab-content"></div>
                <div class="big-card-bottom-btn-box">
                    <button onclick="showPreviousCard()" id="nextButton" class="big-card-bottom-btn">Previous</button>
                    <button onclick="showNextCard()" id="prevButton" class="big-card-bottom-btn">Next</button>
                </div>
            </div>
        </div>
    `;
}

function getAboutHTML(stats) {  // wenn auf einen der tabs gedrückt wird löst die function showTab() aus, die das entsprechenden template/HTML reinschmeisst
    return `
        <div class="about-tab-box">
            <div class="about-tab-box-left">
                <b>Height:</b>
                <b>Weight:</b>
                <b>Base Experience:</b>
            </div>
            <div class="about-tab-box-right">
                <p>${stats.height}</p>
                <p>${stats.weight}</p>
                <p>${stats.base_experience}</p>
            </div>
        </div>
    `;
}

function getBaseStatsHTML(stats) {
    return stats.stats.map(stat => `
        <p>
            ${stat.stat.name}: ${stat.base_stat}
        </p>
    `).join("");
}

function getMovesHTML(stats) {
    return stats.moves.slice(0, 5).map(move => `
        <p>${move.move.name}</p>
    `).join("");
}

function getAbilitiesHTML(stats) {
    return stats.abilities.map(ability => `
        <p>${ability.ability.name}</p>
    `).join("");
}

function spinnerTemplate() {
    return `
        <div id="spinner" class="spinner-container">
            <img class="spinner-img" src="assets/images/pokeball-logo.png">
        </div>
    `;
}