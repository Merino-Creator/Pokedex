let dialogRef = document.getElementById('bigPokemonCard');

async function openDialog(index) {
    dialogRef.showModal();

    let stats = await fetchPokeStats(index);

    renderDialog(stats);
}

function renderDialog(stats) {
    dialogRef.innerHTML = dialogTemplate(stats);
}