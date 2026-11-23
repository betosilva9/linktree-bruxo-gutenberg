
/*
========================================
LINKTREE - BRUXO GUTENBERG
Arquivo: script.js
========================================
*/

// Número do WhatsApp do cliente
const telefoneWhatsApp = "5581984813106";

// ======================================
// 1. AGENDAMENTO PELO WHATSAPP
// ======================================

function agendarConsulta() {

    const campoNome = document.getElementById("nome");
    const campoServico = document.getElementById("servico");
    const erro = document.getElementById("erro");

    // Verifica se o formulário existe
    if (!campoNome || !campoServico) {
        console.error("Campos do formulário não encontrados.");
        return;
    }

    // Captura as informações
    const nome = campoNome.value.trim();
    const servico = campoServico.value;

    // Limpa a mensagem de erro
    if (erro) {
        erro.textContent = "";
    }

    // Valida os campos
    if (nome === "" || servico === "") {

        if (erro) {
            erro.textContent = "Preencha todos os campos!";
        } else {
            alert("Preencha todos os campos!");
        }

        return;
    }

    // Monta a mensagem personalizada
    const mensagem =
        `Olá! Meu nome é ${nome}. ` +
        `Vim pelo Instagram e gostaria de agendar ` +
        `uma consulta de ${servico}. ` +
        `Poderia me passar mais informações?`;

    // Codifica a mensagem para a URL
    const mensagemFormatada = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp
    const url =
        `https://wa.me/${telefoneWhatsApp}?text=${mensagemFormatada}`;

    // Abre o WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");

}


// ======================================
// 2. MENU INTERATIVO DE SERVIÇOS
// ======================================

const botoes = document.querySelectorAll(".servico-titulo");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // Identifica o serviço selecionado
        const servicoAtual = botao.closest(".servico");

        if (!servicoAtual) {
            return;
        }

        // Verifica se já estava aberto
        const estavaAberto =
            servicoAtual.classList.contains("ativo");

        // Fecha todos os serviços
        document.querySelectorAll(".servico").forEach(function(servico) {

            servico.classList.remove("ativo");

            const titulo = servico.querySelector(".servico-titulo");

            if (titulo) {
                titulo.setAttribute("aria-expanded", "false");
            }

        });

        // Abre o serviço selecionado
        if (!estavaAberto) {

            servicoAtual.classList.add("ativo");

            botao.setAttribute("aria-expanded", "true");

        }

    });

});


// ======================================
// 3. MENSAGEM NO CONSOLE
// ======================================

console.log("Linktree Bruxo Gutenberg carregado com sucesso!");
