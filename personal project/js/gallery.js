document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");

    images.forEach((image) => {
        image.addEventListener("mouseover", () => {
            // Remover la clase "active" de todas las imágenes
            images.forEach((img) => {
                img.classList.remove("active");
            });

            // Agregar la clase "active" a la imagen sobre la que se pasa el mouse
            image.classList.add("active");
        });
    });
});