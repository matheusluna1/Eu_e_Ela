// Arquivo de dados para o site de Dia dos Namorados
// Edite as informações aqui para personalizar o site.

const dados = {
    casal: {
        ele: {
            nome: "Matheus",
            apelido: "Apelido Dele", // Pode ser alterado pelo usuário
            foto: "images/foto_dele.jpg", // Coloque a foto na pasta images/
            linguagensAmor: ["Palavras de Afirmação", "Tempo de Qualidade"],
            tresPalavras: ["Engraçado", "Carinhoso", "Inteligente"],
            hobby: "Jogar videogame",
            comidaPreferida: "Pizza",
            lugarSonhos: "Japão",
            habitoEstranho: "Falar sozinho",
            emoji: "😂",
            manias: "Mania dele aqui",
            aniversario: "DD/MM/AAAA"
        },
        ela: {
            nome: "Samara",
            apelido: "Apelido Dela", // Pode ser alterado pelo usuário
            foto: "images/foto_dela.jpg", // Coloque a foto na pasta images/
            linguagensAmor: ["Atos de Serviço", "Presentes"],
            tresPalavras: ["Amorosa", "Dedicada", "Linda"],
            hobby: "Ler livros",
            comidaPreferida: "Lasanha",
            lugarSonhos: "Paris",
            habitoEstranho: "Cantarolar pela casa",
            emoji: "🥰",
            manias: "Ela não sai da minha casa sem arrumar minha cama",
            aniversario: "DD/MM/AAAA"
        }
    },
    dataInicioRelacionamento: "2024-11-22", // Formato AAAA-MM-DD para o cronômetro
    eventosImportantes: [
        {
            data: "DD/MM/AAAA",
            titulo: "Primeiro Beijo",
            descricao: "Descrição detalhada sobre o primeiro beijo..."
        },
        {
            data: "DD/MM/AAAA",
            titulo: "Início do Namoro (Viagem para Bom Despacho)",
            descricao: "Descrição detalhada sobre o início do namoro..."
        },
        {
            data: "DD/MM/AAAA",
            titulo: "Primeiro \'Eu Te Amo\'",
            descricao: "Descrição detalhada sobre quando disseram \'eu te amo\'..."
        }
        // Adicione mais eventos aqui
    ],
    cartas: [
        {
            titulo: "Carta para Ele 1",
            remetente: "Samara",
            destinatario: "Matheus",
            conteudo: `Aqui vai o texto da primeira carta que ela escreveu para ele...`
        },
        {
            titulo: "Carta para Ela 1",
            remetente: "Matheus",
            destinatario: "Samara",
            conteudo: `Aqui vai o texto da primeira carta que ele escreveu para ela...`
        }
        // Adicione mais cartas aqui
    ],
    fotos: [
        {
            imagem: "images/foto_casal_1.jpg", // Coloque a foto na pasta images/
            dataTirada: "DD/MM/AAAA",
            legenda: "Lembrança especial desta foto...",
            citacao: "Briguem o quanto quiserem, contanto que façam as pazes antes do final do dia. - Papa Francisco"
        },
        {
            imagem: "images/foto_casal_2.jpg", // Coloque a foto na pasta images/
            dataTirada: "DD/MM/AAAA",
            legenda: "Outra lembrança querida...",
            citacao: "O amor é a força mais sutil do mundo."
        }
        // Adicione mais fotos aqui
    ],
    videos: [
        {
            titulo: "Vídeo Dela para Ele 1",
            url: "https://www.youtube.com/embed/ID_DO_VIDEO_AQUI", // Exemplo de link do YouTube (use o link de incorporação)
            descricao: "Vídeo que ela fez para ele."
        }
        // Adicione mais vídeos aqui (sejam links ou instruções para arquivos locais)
    ],
    ideiasProximidade: [
        "Chamadas de vídeos frequentes (já fazemos)",
        "Rituais diários, como mandar bom dia e boa noite, enviar fotos do que está fazendo etc. (também já fazemos isso)",
        "Assistir a uma mesma série",
        "Ler um mesmo livro",
        "Criar uma playlist nossa",
        "Fazer uma lista de desejos (viagens, etc.)",
        "Escrever uma história a dois (cada um escreve um parágrafo e manda pro outro alternando)"
        // Adicione mais ideias aqui
    ],
    sugestoes: [] // Este array pode ser usado para \'simular\' o formulário de sugestões, editando manualmente
};

// Para o cronômetro, precisamos da data de início do relacionamento
// Certifique-se de que dados.dataInicioRelacionamento está no formato correto "AAAA-MM-DD"
// const dataInicioNamoro = new Date(dados.dataInicioRelacionamento + "T00:00:00");

