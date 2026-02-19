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
}