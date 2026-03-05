// Abrir o convite principal
function abrirConvite() {
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("convite").classList.remove("oculto");
}

// Mostrar/Esconder presentes com Scroll Suave
function togglePresentes() {
    const section = document.getElementById("presentes");
    section.classList.toggle("oculto");

    if (!section.classList.contains("oculto")) {
        // Pequeno atraso para o navegador processar o "remove oculto" antes de rolar
        setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
}

// Configuração do Contador
const dataEvento = new Date("2026-04-21T15:00:00").getTime();

const atualizarContagem = setInterval(() => {
    const agora = new Date().getTime();
    const diff = dataEvento - agora;

    if (diff <= 0) {
        document.getElementById("contador").innerText = "🌊 É HOJE! Mergulhem nessa festa! 🌊";
        clearInterval(atualizarContagem);
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("contador").innerText = 
        `Faltam ${dias} dias • ${horas}h • ${minutos}min`;
}, 1000);

// Links Externos
function abrirLocal() {
    // Substitua pelo link real do Google Maps da festa
    window.open("https://share.google/ruOYfSMnZWx0qxZjs", "_blank");
}

function confirmarPresenca() {
    window.open("https://w.app/vmafew", "_blank");
}