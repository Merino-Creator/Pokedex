const spinnerRef = document.getElementById("spinner");
const mainContainerRef = document.getElementById("mainContainer");

function showSpinner() {
    spinnerRef.classList.remove("hidden");
}

function hideSpinner() {
    spinnerRef.classList.add("hidden");
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}