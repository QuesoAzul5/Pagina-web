document.addEventListener("DOMContentLoaded", function() {
    const fechaObjetivo = new Date("2025-10-18T13:00:00"); // Fecha objetivo

    function calcularDiferenciaTiempo() {
        const ahora = new Date();

        let meses = fechaObjetivo.getMonth() - ahora.getMonth();
        let días = fechaObjetivo.getDate() - ahora.getDate();
        let horas = fechaObjetivo.getHours() - ahora.getHours();
        let minutos = fechaObjetivo.getMinutes() - ahora.getMinutes();
        let segundos = fechaObjetivo.getSeconds() - ahora.getSeconds();

        // Ajustar si los segundos son negativos
        if (segundos < 0) {
            segundos += 60;
            minutos--;
        }

        // Ajustar si los minutos son negativos
        if (minutos < 0) {
            minutos += 60;
            horas--;
        }

        // Ajustar si las horas son negativas
        if (horas < 0) {
            horas += 24;
            días--;
        }

        // Ajustar si los días son negativos
        if (días < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
            días += ultimoDiaMesAnterior;
        }

        // Ajustar si los meses son negativos
        if (meses < 0) {
            años--;
            meses += 12;
        }

        document.getElementById("contador").innerHTML =
            `Faltan ${meses} Meses, ${días} Días, ${horas}h ${minutos}m ${segundos}s `;

        
    }

    // Actualizar cada segundo
    const intervalo = setInterval(calcularDiferenciaTiempo, 1000);
    calcularDiferenciaTiempo(); // Ejecutar inmediatamente
});


const carpetaID = "1g6BCGgW92mysHsGJ2mGJfXNwbpRpqCuW"; // Reemplaza con el ID de tu carpeta de Google Drive
const apiKey = "AIzaSyA6uTscI3iIWiSdlIYu51Nz5S3xPhwsaB0"; // Reemplaza con tu API Key de Google Drive

async function cargarImagenes() {
    const url = `https://www.googleapis.com/drive/v3/files?q='${carpetaID}'+in+parents&key=${apiKey}&fields=files(id,name)`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const galeria = document.getElementById("galeria");

        data.files.forEach(file => {
            const img = document.createElement("img");
            img.src = `https://drive.google.com/uc?id=${file.id}`;
            img.onclick = () => abrirLightbox(img.src);
            galeria.appendChild(img);
        });
    } catch (error) {
        console.error("Error cargando imágenes:", error);
    }
}

// Función para abrir el Lightbox
function abrirLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

// Función para cerrar el Lightbox
function cerrarLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Cargar imágenes al cargar la página
document.addEventListener("DOMContentLoaded", cargarImagenes);



document.getElementById("miIframe").addEventListener("click", function() {
    window.open("https://drive.google.com/drive/folders/1g6BCGgW92mysHsGJ2mGJfXNwbpRpqCuW", "_blank");
});