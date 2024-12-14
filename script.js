document.addEventListener("DOMContentLoaded", function () {
    const faleConoscoLink = document.getElementById("faleconosco-link");
    const faleConoscoContainer = document.getElementById("container-link");

    faleConoscoLink.addEventListener("click", function (event) {
        event.preventDefault();
        faleConoscoContainer.classList.toggle("show");
    });

    // Fechar o contêiner clicando fora dele
    document.addEventListener("click", function (event) {
        if (!faleconosco-link.contains(event.target) && event.target !== container-link) {
            container-link.classList.remove("show");
        }
    });
});