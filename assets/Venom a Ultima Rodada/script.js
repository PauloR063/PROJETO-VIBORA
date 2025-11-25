const container = document.querySelector("#filmes-series");
const wrapper = document.querySelector(".filmes-wrapper");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

let currentTranslate = 0;
let slide = 400;

function updateLimits() {
    containerWidth = container.offsetWidth;
    wrapperWidth = wrapper.scrollWidth;
    maxTranslate = containerWidth - wrapperWidth; // sempre negativo
}

updateLimits(); // calcula ao iniciar
window.addEventListener("resize", updateLimits); // recalcula se a tela mudar

btnNext.addEventListener("click", () => {
    updateLimits();

    if (currentTranslate > maxTranslate) {
        currentTranslate -= slide;

        // limite máximo
        if (currentTranslate < maxTranslate) {
            currentTranslate = maxTranslate;
        }

        wrapper.style.transform = `translateX(${currentTranslate}px)`;
    }
});

btnPrev.addEventListener("click", () => {
    updateLimits();

    if (currentTranslate < 0) {
        currentTranslate += slide;

        // limite mínimo (começo)
        if (currentTranslate > 0) {
            currentTranslate = 0;
        }
        wrapper.style.transform = `translateX(${currentTranslate}px)`;
    }
});
