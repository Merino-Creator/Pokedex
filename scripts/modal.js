let dialogRef = document.getElementById('bigPokemonCard');
let current = 1;
let max = 100;
let currentIndex = 0;

async function openDialog(index) {
    document.body.style.overflow = "hidden";
    dialogRef.showModal();
    let stats = await fetchPokeStats(index);  // reihenfolge spielt eine rolle, da wir hier erst die daten holen befor wir etwas anzeigen lassen können.
    currentIndex = index;  // currentIndex beim öffnen auf den index setzen, damit man weis, welches index geöffnet ist und dieser auch entsprechend übergeben wird. sonst setzt er sich immer wieder zurück auf den globalen wert
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

async function renderCard(index) {
    if (!pokeStats[index]) {
        await fetchPokeStats(index);  // überprüfen ob wir die daten geladen haben oder noch nicht
    }

    const stats = pokeStats[index];  // wir speichern die geholten daten lokal in stats um einfacher drauf zuzugreifen
    document.getElementById('bigPokemonCard').innerHTML = dialogTemplate(stats); // wir lassen das template mit dem entsprechenden index erzeugen
    addTabTemplate('about', stats.id);  // nachdem das template neu generiert wurde rufen wir diese funktion auf um den inhalt der tabs auch sofort zu füllen, da das nicht automatisch passiert 
    highlightTab('about', stats.id);  // und highlight weil das auch nicht automatisch passiert. parameter wie gewohnt
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % allPokemon.length;  // wir haben 100 pokemon, also ist der maximale currentIndex 99 + 1 wäre 100 (gibts nicht) also mit % wird dividierd 100/100 = 0 und wir fangen dadurch wieder von vorne an
    renderCard(currentIndex);
}

function showPreviousCard() {
    currentIndex = (currentIndex - 1 + allPokemon.length) % allPokemon.length;  // gleich 0 - 1 + 100 = 99, wir fangen wieder von hinten an
    renderCard(currentIndex);
}
