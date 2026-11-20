function lerTexto() {
    const texto = document.getElementById("texto").textContent;

    // Se já estiver lendo, interrompe a leitura anterior
    if (window.speechSynthesis.speaking) {
        console.log("Cancelando leitura anterior...");
        window.speechSynthesis.cancel();
    }

    console.log("Iniciando leitura...");

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";

    fala.onend = () => {
        console.log("Leitura finalizada.");
    };

    window.speechSynthesis.speak(fala);
}
