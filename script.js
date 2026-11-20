function lerTexto() {
    const texto = document.getElementById("texto").textContent;

    // Impede leituras simultâneas
    if (window.speechSynthesis.speaking) {
        console.log("Leitura anterior cancelada.");
        window.speechSynthesis.cancel();
    }

    console.log("Iniciando leitura...");

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;
    fala.volume = 1;

    fala.onstart = () => {
        console.log("Leitura iniciada.");
    };

    fala.onend = () => {
        console.log("Leitura finalizada.");
    };

    fala.onerror = (erro) => {
        console.log("Erro:", erro);
    };

    window.speechSynthesis.speak(fala);
}
