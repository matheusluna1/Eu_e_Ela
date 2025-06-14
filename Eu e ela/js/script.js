document.addEventListener('DOMContentLoaded', () => {
    // Não tentamos carregar dados.js via fetch, pois ele já é carregado como script
    console.log("Script inicializado com sucesso");
    
    // Exemplo de interatividade: Mostrar uma mensagem ao clicar em um botão
    const botaoExemplo = document.getElementById('botaoExemplo'); // Supondo que você tenha um botão com id='botaoExemplo'
    if (botaoExemplo) {
        botaoExemplo.addEventListener('click', () => {
            alert('Botão clicado!');
        });
    }

    // Adicione mais interatividade e lógica conforme necessário
});

