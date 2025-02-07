document.addEventListener("DOMContentLoaded", function () {
    // Obtener todas las pestañas y los contenidos
    const tabs = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Quitar la clase "active" de todas las pestañas
            tabs.forEach((t) => t.classList.remove("active"));

            // Agregar la clase "active" a la pestaña clickeada
            this.classList.add("active");

            // Ocultar todas las secciones de contenido
            contentSections.forEach((section) => section.classList.add("d-none"));

            // Obtener el ID del contenido relacionado y mostrarlo
            const target = this.getAttribute("data-target");
            document.getElementById(target).classList.remove("d-none");
        });
    });
});