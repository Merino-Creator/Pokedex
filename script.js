let renderCount = 20;

async function init() {
    await savePokeData();
    await addSmallPokemonCard(); 
}

async function addSmallPokemonCard() {  // ich bearbeite die funktion so, dass die neu erworbenen daten verwendet werden
    let smallCardRef = document.getElementById('mainContainer');

    smallCardRef.innerHTML = "";

    let max = Math.min(allPokemon.length, renderCount);

    for (let index = 0; index < max; index++) {
        let stats = await fetchPokeStats(index);  // hier sorge ich dafür, dass ich jeweils die daten für jedes pokemon hole, da ich hier soweiso durch alle pokemon durchiteriere.
        smallCardRef.innerHTML += smallPokemonCardTemplate(stats);  // dann übergebe ich den parameter an mein template, damit ich damit nun auf alle daten zugreifen kann
    }
}

async function addTypeTemplate() {
    let typeRef = document.getElementById('smallCardType');
    typeRef.innerHTML = "";
    
    for (let index = 0; index < allPokemon.length; index++) {
        let stats = await fetchPokeStats(index);
        typeRef.innerHTML += smallCardTypeTemplate(stats);
    }
}

function loadMore() {
    renderCount += 20;
    addSmallPokemonCard();
}

function changeMode() {
    
}