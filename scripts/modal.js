let dialogRef = document.getElementById('bigPokemonCard');

async function openDialog(index) {

    document.body.style.overflow = "hidden";

    dialogRef.showModal();

    let stats = await fetchPokeStats(index);

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

    showTab("about", stats.id);
}

async function showTab(tabName, id) {
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