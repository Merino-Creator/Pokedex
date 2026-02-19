let renderCount = 20;

async function init() {
    await savePokeData();
    await addSmallPokemonCard();
}

async function addSmallPokemonCard() {  // ich bearbeite die funktion so, dass die neu erworbenen daten verwendet werden
    let smallCardRef = document.getElementById('mainContainer');

    let start = smallCardRef.children.length;   // wie viele karten existieren schon? und danach ist der start punkt

    let max = Math.min(allPokemon.length, renderCount);  // sucht sich die niedrigere zahl der beiden aus, und verwendet diese um die anzahl der geladenen karten zu bestimmen

    for (let index = start; index < max; index++) {
        let stats = await fetchPokeStats(index);  // hier sorge ich dafür, dass ich jeweils die daten für jedes pokemon hole, da ich hier soweiso durch alle pokemon durchiteriere.
        smallCardRef.insertAdjacentHTML(
            "beforeend",
            smallPokemonCardTemplate(stats)  // dann übergebe ich den parameter an mein template, damit ich damit nun auf alle daten zugreifen kann
        );
    }
}

function loadMore() {
    renderCount += 20;
    addSmallPokemonCard();

    if (renderCount >= allPokemon.length) {
        showMoreButton.style.display = "none";
    }
}

async function searchPokemon(query) {
    let searchRef = document.getElementById('mainContainer');
    let showMoreRef = document.getElementById("showMoreButton");

    query = query.toLowerCase().trim();  // query stellt unsere eingabe dar. kleinbuchstaben sind in ordnung

    if (query === "") {   // falls sich nicht in der eingabe befindet
        searchRef.innerHTML = "";
        showMoreRef.style.display = "block";  // lassen wir den load more block anzeigen. das passiert erst wenn was eingegeben und wieder glöscht wurde, denn standardmäßig wird er ja geladen
        await addSmallPokemonCard();  // und laden alle karten wieder rein
        return;
    }

    if (query.length < 3) {  // wenn die eingabe weniger als 3 buchstaben enthält, wird nichts gesucht
        searchRef.innerHTML = "";
        showMoreRef.style.display = "none";  // der show more button wird entfernt
        return;
    }  // bis hier wird der input geprüft

    let filteredPokemon = allPokemon  // ab hier wird der filter erzeugt

        .map((poke, index) => ({ ...poke, index }))  // .map erstellt ein neues array, dabei werden poke und index festgelegt als key value paar. ...poke kopiert alle eigenschaften von ursprünglichen objekt und wir fügen einen index hinzu
        .filter(poke => poke.name.toLowerCase().includes(query));  // nach map sieht es aus wie vorher, bloß das jedes objekt einen index erhalten hat. den wir brauchen den index für die fetchPokeStats() function

    renderFilteredPokemon(filteredPokemon);
}  // filter erstellt dann ein neues array, das nur die elemente enthält, für die die bedingung true ist! also poke.name.lowercase namen des arrays werden abgerufen .includes(query) überprüft ob unsere eingegebenen bucstaben mit einem namen übereinstimmen.

async function renderFilteredPokemon(filteredArray) {  // eine seperate function die die gefilterten pokemon rendert
    let searchRef = document.getElementById('mainContainer');
    searchRef.innerHTML = "";

    for (let poke of filteredArray) {  // wir nehmen poke, das element, welches wir oben per map erstellt haben aus filteredPokemon (poke ist hierbei kein index)
        let stats = await fetchPokeStats(poke.index);  // checken ob die parameter mit den gefetchten daten übereinstimmen
        searchRef.insertAdjacentHTML("beforeend", smallPokemonCardTemplate(stats));  // fügen das entsprechende gefilterte pokemon in das ende des containers ein.
    }
}