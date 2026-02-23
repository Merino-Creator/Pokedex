let dialogRef = document.getElementById('bigPokemonCard');
let current = 1;
let max = 100;
let currentIndex = 0;

async function openDialog(index) {
    document.body.style.overflow = "hidden";
    dialogRef.showModal();
    let stats = await fetchPokeStats(index);
    currentIndex = index;
    renderDialog(stats);
}

function dialogClick(event) {
    if (event.target === dialogRef) {
        closeDialog();
    }
}

function closeDialog() {
    dialogRef.close();
    document.body.style.overflow = "auto";
}

function renderDialog(stats) {
    dialogRef.innerHTML = dialogTemplate(stats);
    highlightTab("about", stats.id);
}

async function addTabTemplate(tabName, id) {
    let stats = await fetchPokemonByIdFromAll(id);
    let contentRef = document.getElementById("tabContent");

    if (tabName === "about") {
        contentRef.innerHTML = getAboutHTML(stats);
    }

    if (tabName === "base") {
        contentRef.innerHTML = getBaseStatsHTML(stats);
    }

    if (tabName === "moves") {
        contentRef.innerHTML = getMovesHTML(stats);
    }

    if (tabName === "abilities") {
        contentRef.innerHTML = getAbilitiesHTML(stats);
    }
}

async function highlightTab(tabName, id) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active'); 
    });

    let activeBtn = document.querySelector(`.tab-btn[onclick*="'${tabName}',"]`); 
    if (activeBtn) activeBtn.classList.add('active');

    await addTabTemplate(tabName, id);
}

async function renderCard(index) {
    if (!pokeStats[index]) {
        await fetchPokeStats(index);
    }

    const stats = pokeStats[index];
    document.getElementById('bigPokemonCard').innerHTML = dialogTemplate(stats);
    addTabTemplate('about', stats.id);
    highlightTab('about', stats.id);
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % allPokemon.length;
    renderCard(currentIndex);
}

function showPreviousCard() {
    currentIndex = (currentIndex - 1 + allPokemon.length) % allPokemon.length;
    renderCard(currentIndex);
}
