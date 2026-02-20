let dialogRef = document.getElementById('bigPokemonCard');

async function openDialog(index) {

    document.body.style.overflow = "hidden";

    dialogRef.showModal();

    let stats = await fetchPokeStats(index);  // reihenfolge spielt eine rolle, da wir hier erst die daten holen befor wir etwas anzeigen lassen können.

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

    showTab("about", stats.id);  // lässt standradmäßig den about tab beim öffnen anzeigen
}

async function showTab(tabName, id) {  // wir übergeben den namen des entsprechenden tabs und die id damit klar ist auf welches pokemon zugegriffen werden soll
    let stats = await fetchPokemonByIdFromAll(id);  // wir holen uns die daten der urls die wir brauchen

    let contentRef = document.getElementById("tabContent");

    if (tabName === "about") {
        contentRef.innerHTML = getAboutHTML(stats);  // wir schmeissen das entsprechende HTML in den gewünschten container
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