const spinnerRef = document.getElementById("spinner");
const mainContainerRef = document.getElementById("mainContainer");
const loadMoreBtnRef = document.getElementById("showMoreButton");

function showSpinner() {
    spinnerRef.classList.remove("hidden");
    loadMoreBtnRef.style.display ="none";
}

function hideSpinner() {
    spinnerRef.classList.add("hidden");
    loadMoreBtnRef.style.display = "block";
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}