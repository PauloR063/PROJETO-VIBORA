const slider = document.querySelector("#filmes-series");
const slides = document.querySelectorAll(".img-filmes");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
let index = 0;

// Função para atualizar o slider e controlar a visibilidade dos botões
function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Oculta o botão "prev" no primeiro slide
    btnPrev.style.display = index === 0 ? "none" : "block";

}

btnNext.addEventListener("click", () => {
    btnNext.style.display = "none"; // Esconde o botão
  });

btnPrev.addEventListener("click", () => {
    btnNext.style.display = "block"; // Mostra o botão direito
});

// Evento para avançar
btnNext.addEventListener("click", () => {
    if (index < slides.length - 1) {
        index++;
        updateSlider();
    }
});

// Evento para voltar
btnPrev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

// Inicializa o estado dos botões
updateSlider();




