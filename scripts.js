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
