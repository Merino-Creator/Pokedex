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

    highlightTab("about", stats.id);  // lässt standradmäßig den about tab beim öffnen anzeigen
}

async function addTabTemplate(tabName, id) {  // wir übergeben den namen des entsprechenden tabs und die id damit klar ist auf welches pokemon zugegriffen werden soll
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

async function highlightTab(tabName, id) {
    document.querySelectorAll('.tab-btn').forEach(btn => {  // wir suchen uns alle elemente mit der klasse .tab-btn heraus iterieren über alle elemente auf die das zutrifft
        btn.classList.remove('active');  // und geben jeder die klasse active und entfernen sie zugleich 
    });

    let activeBtn = document.querySelector(`.tab-btn[onclick*="'${tabName}',"]`);  // wir suchen die elemente raus die die entsprechenden suchkriterien erfüllen und speichern sie in der variable
    if (activeBtn) activeBtn.classList.add('active');  // wenn tatsächlich etwas gefunden wurde, wird diesem element die klasse active hinzugefügt

    await addTabTemplate(tabName, id);
}

function showNextCard() {

}

function showPreviousCard() {
    
}