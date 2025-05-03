document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    const darkModeButton = document.getElementById("toggle-dark");
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    fetch("https://api.agify.io/?name=Juan")
        .then(response => response.json())
        .then(data => {
            document.getElementById("apiData").textContent = `Edad estimada: ${data.age}`;
        });

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario enviado correctamente 🎉");
    });
});
