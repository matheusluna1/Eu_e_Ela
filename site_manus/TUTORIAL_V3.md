# Tutorial Detalhado: Site de Dia dos Namorados (Versão 3)

Olá! Este tutorial irá guiá-lo sobre como usar, editar e personalizar o seu site especial de Dia dos Namorados (Versão 3).

## 1. Visão Geral do Site

Este site foi criado para celebrar o seu relacionamento com a Samara. Ele possui diversas seções para vocês registrarem memórias, características, datas importantes, cartas, fotos, vídeos e ideias para o futuro.

As principais funcionalidades incluem:

*   **Páginas Dedicadas:** Início, Nossas Características, Nosso Calendário, Nossas Cartas, Nossas Fotos, Nossos Vídeos, Nossas Ideias.
*   **Conteúdo Dinâmico:** Você pode adicionar, visualizar e excluir itens na maioria das seções diretamente pelas páginas.
*   **Personalização:** Os nomes do casal (Matheus e Samara) e a data de início do relacionamento são personalizáveis, assim como todo o conteúdo.
*   **Cores:** O site utiliza uma paleta de cores com foco no Azul para o Matheus e Lilás para a Samara.
*   **Armazenamento Local:** As alterações feitas diretamente nas páginas (adicionar/excluir itens) são salvas no `localStorage` do seu navegador. Isso significa que as alterações são persistentes no navegador que você usou, mas não serão refletidas se você abrir o site em outro navegador ou dispositivo, ou se limpar o cache do navegador.

## 2. Estrutura de Arquivos do Site

Ao descompactar o arquivo `.zip` do site, você encontrará a seguinte estrutura de pastas e arquivos principais dentro do diretório `site_namorados_v3` (ou similar, dependendo de onde você extraiu):

```
site_namorados_v3/
|-- index.html             (Página inicial)
|-- caracteristicas.html
|-- calendario.html
|-- cartas.html
|-- fotos.html
|-- videos.html
|-- ideias.html
|-- css/                   (Pasta com os arquivos de estilo)
|   |-- style.css          (Estilos globais e cores principais)
|   |-- calendario.css
|   |-- cartas.css
|   |-- caracteristicas.css
|   |-- fotos.css
|   |-- videos.css
|   |-- ideias.css
|-- js/                    (Pasta com os arquivos de script)
|   |-- script.js          (Scripts gerais de funcionalidade, se houver)
|   |-- dados.js           (IMPORTANTE: Arquivo para dados iniciais e personalização principal)
|-- assets/
|   |-- images/            (Pasta para guardar as fotos que você quer usar na galeria)
|-- README.md              (Informações gerais sobre o projeto)
|-- TUTORIAL_V3.md         (Este tutorial)
```

*   **Arquivos `.html`**: São as diferentes páginas do seu site.
*   **Pasta `css`**: Contém os arquivos que definem a aparência (cores, fontes, layout) do site.
*   **Pasta `js`**: Contém os arquivos JavaScript. O `js/dados.js` é crucial para a personalização inicial do conteúdo.
*   **Pasta `assets/images/`**: É onde você deve colocar as imagens que deseja exibir na seção "Nossas Fotos".

## 3. Editando o Conteúdo Principal (Arquivo `js/dados.js`)

A forma mais robusta de personalizar o conteúdo inicial do site (aquele que aparece quando o site é aberto pela primeira vez ou se o `localStorage` estiver vazio) é editando o arquivo `js/dados.js`. Você pode abrir este arquivo com um editor de texto simples (como Bloco de Notas, Notepad++, VS Code, etc.).

Dentro de `js/dados.js`, você encontrará uma estrutura similar a esta:

```javascript
const dados = {
    casal: {
        ele: {
            nome: "Matheus",
            apelido: "Amor", // ou outro apelido
            // ... outras características iniciais ...
        },
        ela: {
            nome: "Samara",
            apelido: "Vida", // ou outro apelido
            // ... outras características iniciais ...
        }
    },
    dataInicioRelacionamento: "AAAA-MM-DD", // EX: "2022-06-12"
    eventosImportantes: [
        { data: "DD/MM/AAAA", titulo: "Primeiro Beijo", descricao: "Foi incrível..." },
        // ... mais eventos ...
    ],
    cartas: [
        { titulo: "Para Meu Amor", remetente: "Samara", destinatario: "Matheus", conteudo: "Texto da carta...", anexo: null /* ou "assets/images/nome_da_imagem_da_carta.jpg" */ },
        // ... mais cartas ...
    ],
    fotos: [
        { imagem: "assets/images/foto1.jpg", dataTirada: "DD/MM/AAAA", legenda: "Nossa primeira viagem!", citacao: "Amo-te" },
        // ... mais fotos ...
    ],
    videos: [
        { titulo: "Nosso vídeo especial", url: "https://youtu.be/XXXXXXXXXXX", descricao: "Lembra desse dia?" },
        // ... mais vídeos ...
    ],
    ideias: [
        { texto: "Fazer um piquenique no parque" },
        // ... mais ideias ...
    ]
};
```

**Como editar:**

*   **Nomes do Casal:**
    *   Altere os valores de `dados.casal.ele.nome` e `dados.casal.ela.nome`.
    *   Você também pode definir apelidos em `dados.casal.ele.apelido` e `dados.casal.ela.apelido`.
*   **Data de Início do Relacionamento:**
    *   Altere `dados.dataInicioRelacionamento` para a data correta no formato "AAAA-MM-DD" (ano-mês-dia). Exemplo: `"2023-06-12"`. Isso é usado para o cronômetro de tempo juntos na página "Nosso Calendário".
*   **Características Iniciais (`dados.casal.ele` e `dados.casal.ela`):**
    *   Dentro de `ele` e `ela`, você pode adicionar mais campos (como `hobby: "Ler"`) ou modificar os existentes. Siga o formato `nomeDaCaracteristica: "Valor da Característica"`.
*   **Eventos Importantes Iniciais (`dados.eventosImportantes`):**
    *   Para adicionar um evento, copie uma linha como `{ data: "DD/MM/AAAA", titulo: "Título do Evento", descricao: "Descrição..." }`, cole e altere os valores. Mantenha as vírgulas entre os eventos.
*   **Cartas Iniciais (`dados.cartas`):**
    *   Adicione cartas seguindo o formato `{ titulo: "...", remetente: "...", destinatario: "...", conteudo: "...", anexo: "assets/images/nome_anexo.jpg" /* ou null se não houver anexo */ }`.
    *   Se a carta tiver uma imagem anexada, coloque o caminho para a imagem na pasta `assets/images/`.
*   **Fotos Iniciais (`dados.fotos`):**
    *   Adicione fotos com `{ imagem: "assets/images/sua_foto.jpg", dataTirada: "DD/MM/AAAA", legenda: "...", citacao: "..." }`.
    *   **Importante:** As imagens devem estar na pasta `assets/images/` e o caminho deve ser correto.
*   **Vídeos Iniciais (`dados.videos`):**
    *   Adicione vídeos com `{ titulo: "...", url: "LINK_COMPARTILHAMENTO_YOUTUBE", descricao: "..." }`.
    *   Use o link de compartilhamento do YouTube (ex: `https://youtu.be/VIDEO_ID`).
*   **Ideias Iniciais (`dados.ideias`):**
    *   Adicione ideias com `{ texto: "Descrição da ideia" }`.

**Atenção:** Ao editar o arquivo `js/dados.js`, tenha cuidado com a sintaxe (vírgulas, chaves `{}`, colchetes `[]`, aspas `"`). Um erro de sintaxe pode impedir o funcionamento do site.

## 4. Usando as Funcionalidades das Páginas

Além de editar o `js/dados.js` para o conteúdo inicial, você pode adicionar e remover conteúdo diretamente nas páginas do site. Essas alterações são salvas no `localStorage` do seu navegador.

*   **Nossas Características:**
    *   **Adicionar:** Preencha os campos "Nome da Característica" e "Valor" para Matheus ou Samara e clique em "Adicionar".
    *   **Excluir:** Clique no botão "Excluir" ao lado de uma característica.
*   **Nosso Calendário:**
    *   **Adicionar Evento:** Preencha a data, título e descrição do evento e clique em "Adicionar Evento".
    *   **Excluir Evento:** Clique no botão "Excluir" abaixo do evento desejado.
*   **Nossas Cartas:**
    *   **Adicionar Carta:** Preencha título, remetente, destinatário, conteúdo e, opcionalmente, anexe uma foto da carta (a imagem será convertida e salva no `localStorage`). Clique em "Adicionar Carta".
    *   **Visualizar Carta:** Clique em uma carta na lista para abri-la em um modal (tela cheia), incluindo o anexo se houver.
    *   **Excluir Carta:** Clique no botão "Excluir Carta" dentro da visualização da carta na lista.
*   **Nossas Fotos:**
    *   **Adicionar Foto:** Clique em "Escolha uma foto" para selecionar uma imagem do seu computador. Preencha data, legenda e citação (opcional). Clique em "Adicionar Foto". A imagem será salva no `localStorage`.
    *   **Excluir Foto:** Clique no botão "Excluir Foto" abaixo da foto desejada.
*   **Nossos Vídeos:**
    *   **Adicionar Vídeo:** Preencha o título, o link de compartilhamento do YouTube e uma descrição (opcional). Clique em "Adicionar Vídeo". Uma miniatura será exibida, e o vídeo poderá ser assistido em um player embutido.
    *   **Excluir Vídeo:** Clique no botão "Excluir Vídeo" abaixo do vídeo desejado.
*   **Nossas Ideias:**
    *   **Adicionar Ideia:** Digite a ideia na caixa de texto e clique em "Adicionar Ideia".
    *   **Excluir Ideia:** Clique no botão "Excluir Ideia" ao lado da ideia.

## 5. Gerenciamento de Mídia (Imagens para Fotos)

*   **Onde colocar as imagens:** Para a seção "Nossas Fotos", se você estiver adicionando fotos através da edição do arquivo `js/dados.js`, as imagens devem ser colocadas na pasta `assets/images/`.
*   **Referenciando imagens no `js/dados.js`:** No arquivo `js/dados.js`, o caminho para a imagem deve ser `"assets/images/nome_da_sua_foto.jpg"` (ou `.png`, etc.).
*   **Adicionando fotos pela página:** Ao adicionar fotos diretamente pela página "Nossas Fotos", a imagem selecionada do seu computador é salva no `localStorage` do navegador e não precisa estar na pasta `assets/images/` (mas isso significa que ela só estará disponível naquele navegador).
*   **Vídeos:** Lembre-se que para a seção "Nossos Vídeos", você apenas insere o link do YouTube. Não há upload de arquivos de vídeo para o site.

## 6. Cores e Estilo (CSS)

As cores principais do site são Azul (para Matheus) e Lilás (para Samara), com um tom de roxo mais escuro no cabeçalho.

Se você tiver algum conhecimento de CSS e quiser fazer pequenas alterações:

*   **Cores Globais:** Estão definidas principalmente no arquivo `css/style.css`.
*   **Cores Específicas:** Algumas páginas podem ter estilos adicionais em seus respectivos arquivos CSS (ex: `css/caracteristicas.css`).

**Aviso:** Modificar arquivos CSS sem conhecimento pode quebrar o layout do site. Faça um backup antes de qualquer alteração se não tiver certeza.

## 7. Como Visualizar o Site

Para ver o site, basta abrir o arquivo `index.html` (localizado na pasta raiz do site, por exemplo, `site_namorados_v3/index.html`) em qualquer navegador de internet moderno (Chrome, Firefox, Edge, Safari).

## 8. Observações Importantes sobre o `localStorage`

*   **Persistência Local:** Quando você adiciona ou exclui conteúdo diretamente pelas páginas, essas informações são salvas no `localStorage` do seu navegador. Isso é ótimo para personalização rápida e uso pessoal no seu computador.
*   **Não é Compartilhado Automaticamente:** Se você enviar os arquivos do site para a Samara, ela não verá as alterações que você fez e que foram salvas apenas no seu `localStorage`. Ela verá o conteúdo inicial definido no `js/dados.js`.
*   **Para Compartilhar com Conteúdo Personalizado:**
    1.  A melhor maneira é editar o arquivo `js/dados.js` com todo o conteúdo que vocês desejam que seja o "padrão" do site.
    2.  Salve o arquivo `js/dados.js`.
    3.  Então, compacte toda a pasta do site (`site_namorados_v3`) e envie o arquivo `.zip` para ela.
*   **Limpeza de Cache:** Se você limpar o cache ou os dados de sites do seu navegador, as informações salvas no `localStorage` para este site podem ser perdidas, e o site voltará a exibir o conteúdo inicial do `js/dados.js`.

Esperamos que este tutorial ajude vocês a aproveitar ao máximo este site especial!

Com carinho,
Manus (Seu Assistente AI)

