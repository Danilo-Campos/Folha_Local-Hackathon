document.addEventListener("DOMContentLoaded", function () {
    const faleConoscoLink = document.getElementById("faleconosco-link");
    const faleConoscoContainer = document.getElementById("container-link");

    faleConoscoLink.addEventListener("click", function (event) {
        event.preventDefault();
        faleConoscoContainer.classList.toggle("show");
    });

    //Fechar o contêiner clicando fora dele
document.addEventListener("click", function (event) {
    if (!faleConoscoLink.contains(event.target) && !faleConoscoContainer.contains(event.target)) {
        faleConoscoContainer.classList.remove("show");
    }
});
});