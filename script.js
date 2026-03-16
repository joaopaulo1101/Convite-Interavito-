
function abrirConvite() {
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("convite").classList.remove("oculto");
}

function togglePresentes() {
    const section = document.getElementById("presentes");
    section.classList.toggle("oculto");

    if (!section.classList.contains("oculto")) {
        
        setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
}


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


function abrirLocal() {
    
    window.open("https://share.google/ruOYfSMnZWx0qxZjs", "_blank");
}

function confirmarPresenca() {
    window.open("https://wa.me/553299376448?text=Ola,%20Gostaria%20de%20estar%20confirmando%20minha%20presen%C3%A7a%20no%20aniversario%20da%20Ester%20%F0%9F%A5%B3%F0%9F%A5%B3");
}
