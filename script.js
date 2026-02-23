async function init() {
    await savePokeData();
    await addSmallPokemonCard();
}

const silverGradient = `linear-gradient(90deg,
    #999 5%,
    #fff 10%,
    #ccc 30%,
    #ddd 50%,
    #ccc 70%,
    #fff 80%,
    #999 95%)`
;

const goldGradient = `linear-gradient(90deg,
    #b8860b 5%,
    #ffec8b 10%,
    #daa520 30%,
    #ffd700 50%,
    #daa520 70%,
    #ffec8b 80%,
    #b8860b 95%)`
;

let isGold = false;


function toggleMode(element) {
    document.body.style.background = isGold ? silverGradient : goldGradient;
    isGold = !isGold;

    element.src = element.src.includes('lugia.png') 
      ? 'assets/images/ho-oh.png' 
      : 'assets/images/lugia.png'
    ;
}