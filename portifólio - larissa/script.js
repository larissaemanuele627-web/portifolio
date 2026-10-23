
/*
Uso de IA: utilizei o ChatGPT como apoio para organizar a estrutura
inicial e entender exemplos de HTML, CSS e JavaScript.
Estou estudando o código e devo adaptar as partes conforme aprendo.
*/


const botaoMenu = document.getElementById("botaoMenu");
const menuNavegacao = document.getElementById("menuNavegacao");
const botaoTema = document.getElementById("botaoTema");
const textoSaudacao = document.getElementById("textoSaudacao");
const anoAtual = document.getElementById("anoAtual");
const formularioContato = document.getElementById("formularioContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");


botaoMenu.addEventListener("click", function () {
    menuNavegacao.classList.toggle("aberto");

    const menuEstaAberto =
        menuNavegacao.classList.contains("aberto");

    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

    if (menuEstaAberto) {
        botaoMenu.setAttribute(
            "aria-label", "Fechar menu de navegação"
        );
    } else {
        botaoMenu.setAttribute(
            "aria-label", "Abrir menu de navegação"
        );
    }
});


menuNavegacao.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menuNavegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute(
            "aria-label", "Abrir menu de navegação"
        );
    });
});


botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");

    const temaEscuroAtivo =
        document.body.classList.contains("modo-escuro");

    botaoTema.setAttribute("aria-pressed", temaEscuroAtivo);

    if (temaEscuroAtivo) {
        botaoTema.setAttribute("aria-label", "Ativar modo claro");
    } else {
        botaoTema.setAttribute("aria-label", "Ativar modo escuro");
    }
});


function obterSaudacao(hora) {
    if (hora < 12) {
        return "Bom dia";
    } else if (hora < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}


const horaAtual = new Date().getHours();
textoSaudacao.textContent = obterSaudacao(horaAtual);


anoAtual.textContent = new Date().getFullYear();


function mostrarErro(idMensagem, texto) {
    document.getElementById(idMensagem).textContent = texto;
}

function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem =
        document.getElementById("mensagem").value.trim();
    const consentimento =
        document.getElementById("consentimento").checked;

    let formularioValido = true;

    mostrarErro("erroNome", "");
    mostrarErro("erroEmail", "");
    mostrarErro("erroMensagem", "");
    mostrarErro("erroConsentimento", "");
    mensagemSucesso.textContent = "";

    if (nome === "") {
        mostrarErro("erroNome", "Preencha seu nome.");
        formularioValido = false;
    }

    if (email === "") {
        mostrarErro("erroEmail", "Preencha seu e-mail.");
        formularioValido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        mostrarErro("erroEmail", "Digite um e-mail com @ e ponto.");
        formularioValido = false;
    }

    if (mensagem === "") {
        mostrarErro("erroMensagem", "Escreva sua mensagem.");
        formularioValido = false;
    } else if (mensagem.length < 20) {
        mostrarErro(
            "erroMensagem",
            "A mensagem precisa ter pelo menos 20 caracteres."
        );
        formularioValido = false;
    }

    if (!consentimento) {
        mostrarErro(
            "erroConsentimento",
            "Marque a caixa de consentimento."
        );
        formularioValido = false;
    }

    return formularioValido;
}

formularioContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (validarFormulario()) {
        mensagemSucesso.textContent =
            "Mensagem validada! Este formulário é apenas uma demonstração.";

        formularioContato.reset();
    }
});

const botaoVoltarTopo = document.getElementById("voltar-topo");

if (botaoVoltarTopo) {
    botaoVoltarTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}