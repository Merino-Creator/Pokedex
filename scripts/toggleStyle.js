/* Gen 1 */
const redGradient = `
    radial-gradient(ellipse 120% 120% at 50% 50%, #ff2222 0%, #990000 100%)
  `
;

const blueGradient = `
    radial-gradient(ellipse 120% 120% at 50% 50%, #2244ff 0%, #000099 100%)
  `
;

let isBlue = false;

function toggleGenOne(element) {
    document.body.style.background = isBlue ? redGradient : blueGradient;
    isBlue = !isBlue;

    element.src = element.src.includes('blastoise.png')
        ? 'assets/images/charizard.png'
        : 'assets/images/blastoise.png'
        ;
}

/* Gen 2 */
const silverGradient = `
    linear-gradient(90deg,
    #999 5%,
    #fff 10%,
    #ccc 30%,
    #ddd 50%,
    #ccc 70%,
    #fff 80%,
    #999 95%)`
;

const goldGradient = `
    linear-gradient(90deg,
    #b8860b 5%,
    #ffec8b 10%,
    #daa520 30%,
    #ffd700 50%,
    #daa520 70%,
    #ffec8b 80%,
    #b8860b 95%)`
;

let isGold = false;
let shimmerActive = false;

function toggleGenTwo(element) {
    document.body.style.background = isGold ? silverGradient : goldGradient;
    isGold = !isGold;

    element.src = element.src.includes('lugia.png')
        ? 'assets/images/ho-oh.png'
        : 'assets/images/lugia.png'
        ;
}

function toggleShimmer() {
    shimmerActive = !shimmerActive;
    if (shimmerActive) {
        document.body.classList.add('shimmer');
    } else {
        document.body.classList.remove('shimmer');
    }
}

/* Gen 3 */
const sapphireGradient = `
    radial-gradient(ellipse 60% 60% at 50% 50%, #4466ff 0%, transparent 50%),
    radial-gradient(ellipse 30% 30% at 35% 40%, #99aaff 0%, transparent 35%),
    radial-gradient(ellipse 20% 20% at 65% 30%, #ccd4ff 0%, transparent 25%),
    radial-gradient(ellipse 80% 80% at 50% 50%, #0033cc 0%, transparent 70%),
    radial-gradient(ellipse 100% 100% at 50% 50%, #00103d 0%, #00081a 100%)
  `
;

const rubyGradient = `
    radial-gradient(ellipse 60% 60% at 50% 50%, #ff4466 0%, transparent 50%),
    radial-gradient(ellipse 30% 30% at 35% 40%, #ff99aa 0%, transparent 35%),
    radial-gradient(ellipse 20% 20% at 65% 30%, #ffccdd 0%, transparent 25%),
    radial-gradient(ellipse 80% 80% at 50% 50%, #cc0033 0%, transparent 70%),
    radial-gradient(ellipse 100% 100% at 50% 50%, #3d0010 0%, #1a0008 100%)`
;

let isRuby = false;

function toggleGenThree(element) {
    document.body.style.background = isRuby ? sapphireGradient : rubyGradient;
    isRuby = !isRuby;

    element.src = element.src.includes('kyogre.png')
        ? 'assets/images/groudon.png'
        : 'assets/images/kyogre.png'
        ;
}

/* Gen 4 */
const diamondGradient = `
    radial-gradient(ellipse 60% 60% at 50% 50%, #ffffff 0%, transparent 40%),
    radial-gradient(ellipse 25% 25% at 30% 35%, #ffffff 0%, transparent 30%),
    radial-gradient(ellipse 15% 15% at 68% 28%, #cce8ff 0%, transparent 20%),
    radial-gradient(ellipse 40% 40% at 70% 65%, #a8d4ff 0%, transparent 45%),
    radial-gradient(ellipse 80% 80% at 50% 50%, #d0eaff 0%, transparent 70%),
    radial-gradient(ellipse 100% 100% at 50% 50%, #b8d8f0 0%, #e8f4ff 100%)
  `
;

const pearlGradient = `
    radial-gradient(ellipse 60% 60% at 50% 50%, #ffffff 0%, transparent 40%),
    radial-gradient(ellipse 25% 25% at 32% 38%, #ffffff 0%, transparent 30%),
    radial-gradient(ellipse 15% 15% at 66% 30%, #ffe8f0 0%, transparent 20%),
    radial-gradient(ellipse 40% 40% at 68% 62%, #f0c8dd 0%, transparent 45%),
    radial-gradient(ellipse 80% 80% at 50% 50%, #f7dce8 0%, transparent 70%),
    radial-gradient(ellipse 100% 100% at 50% 50%, #f0d0e0 0%, #f9eef4 100%)
  `
; 

let isPearl = false;

function toggleGenFour(element) {
    document.body.style.background = isPearl ? diamondGradient : pearlGradient;
    isPearl = !isPearl;

    element.src = element.src.includes('dialga.png')
        ? 'assets/images/palkia.png'
        : 'assets/images/dialga.png'
        ;
}