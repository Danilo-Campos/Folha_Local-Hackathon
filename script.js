document.addEventListener("DOMContentLoaded", function () {
    const faleConoscoLink = document.getElementById("faleconosco-link");
    const faleConoscoContainer = document.getElementById("container-link");

    faleConoscoLink.addEventListener("click", function (event) {
        event.preventDefault();
        faleConoscoContainer.classList.toggle("show");
    });

    // Fechar o contêiner clicando fora dele
    document.addEventListener("click", function (event) {
        if (!faleConoscoContainer.contains(event.target) && event.target !== faleconosco-link) {
            faleConoscoContainer.classList.remove("show");
        }
    });
});