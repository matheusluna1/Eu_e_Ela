# Tutorial Detalhado: Site de Dia dos Namorados (Versão 2)

Olá! Esta é a nova versão do seu site especial de Dia dos Namorados, com as alterações que você solicitou. Ele continua sendo feito em HTML, CSS e JavaScript, com arquivos separados para facilitar a edição.

## Principais Novidades da Versão 2:

*   **Sem Login:** A página principal agora é uma boas-vindas direta, sem necessidade de senha.
*   **Novas Cores:** O site utiliza uma paleta de Roxo (para ela) e Azul (para ele), aplicadas de forma equilibrada.
*   **Formulários Dinâmicos:** Todas as seções principais (Características, Calendário, Cartas, Fotos, Vídeos, Ideias) agora possuem formulários para adicionar novo conteúdo diretamente na página.
*   **Botões de Excluir:** Cada item adicionado dinamicamente pode ser excluído individualmente.
*   **Upload de Anexos (Simulado):**
    *   **Cartas:** Você pode anexar uma foto da carta original (a imagem é pré-visualizada e salva como dados no navegador).
    *   **Fotos:** Você pode fazer upload de novas fotos para a galeria (a imagem é pré-visualizada e salva como dados no navegador).
    *   **Vídeos:** Você pode adicionar links de vídeos (YouTube/Vimeo) ou o nome de um arquivo de vídeo local (você precisará colocar o arquivo na pasta `assets/videos/` manualmente).
*   **Persistência de Dados:** Os dados adicionados através dos formulários (características, eventos, cartas, fotos, vídeos, ideias) são salvos no `localStorage` do seu navegador. Isso significa que eles persistirão enquanto você usar o mesmo navegador e não limpar os dados de navegação (cache, cookies, etc.).

## Como Usar o Site:

1.  **Descompacte** o arquivo `site_dia_dos_namorados_v2.zip` em uma pasta no seu computador.
2.  **Abra o arquivo `index.html`** (localizado dentro da pasta `home/ubuntu/` após descompactar) em qualquer navegador de internet (Chrome, Firefox, Edge, etc.) para visualizar o site.

## Editando Conteúdo e Usando os Formulários:

A maior parte do conteúdo inicial e alguns dados base ainda podem ser encontrados no arquivo `js/dados.js`. No entanto, a principal forma de adicionar e remover conteúdo agora é através dos formulários nas próprias páginas.

### 1. Página Principal (`index.html`)

*   Não há mais login. A página exibe uma mensagem de boas-vindas.
*   Você pode editar o texto de boas-vindas e a imagem diretamente no arquivo `index.html` se desejar.

### 2. Página de Características (`caracteristicas.html`)

*   **Visualização:** Exibe as características de "Ele" (com detalhes em azul) e "Ela" (com detalhes em roxo).
*   **Adicionar Característica:**
    *   Use o formulário correspondente ("Adicionar Característica (Ele)" ou "Adicionar Característica (Ela)").
    *   Digite o "Nome da Característica" (ex: Hobby, Comida Preferida).
    *   Digite o "Valor" (ex: Ler livros, Chocolate).
    *   Clique em "Adicionar". A nova característica aparecerá na lista.
*   **Excluir Característica:** Clique no botão "Excluir" ao lado da característica que deseja remover.
*   **Dados Iniciais:** Algumas características base podem estar no `js/dados.js`. As novas são salvas no `localStorage`.

### 3. Página de Calendário (`calendario.html`)

*   **Cronômetro:** Continua mostrando o tempo juntos (baseado na data em `js/dados.js`).
*   **Adicionar Evento:**
    *   Use o formulário "Adicionar Novo Evento".
    *   Selecione a data, digite o título e a descrição.
    *   Clique em "Adicionar Evento".
*   **Excluir Evento:** Clique no botão "Excluir" ao lado do evento que deseja remover.
*   **Dados:** Eventos são salvos no `localStorage`.

### 4. Página de Cartas (`cartas.html`)

*   **Adicionar Nova Carta:**
    *   Preencha "Título da Carta", "De", "Para" e o "Conteúdo da Carta".
    *   **Anexar foto da carta (opcional):** Clique em "Escolher arquivo", selecione uma imagem. Uma prévia será mostrada.
    *   Clique em "Adicionar Carta".
*   **Excluir Carta:** Clique no botão "Excluir Carta" abaixo da carta desejada.
*   **Anexos:** A imagem anexada é salva como dados Base64 no `localStorage` junto com a carta.

### 5. Página de Fotos (`fotos.html`)

*   **Adicionar Nova Foto:**
    *   **Escolha uma foto:** Clique em "Escolher arquivo" e selecione a imagem.
    *   Preencha "Data da foto", "Legenda" e "Citação".
    *   Clique em "Adicionar Foto".
*   **Excluir Foto:** Clique no botão "Excluir Foto" abaixo da foto desejada.
*   **Imagens:** As imagens são salvas como dados Base64 no `localStorage`.

### 6. Página de Vídeos (`videos.html`)

*   **Adicionar Novo Vídeo:**
    *   Preencha "Título do Vídeo" e "Descrição".
    *   **Link do Vídeo:** Se for um vídeo online (YouTube/Vimeo), cole o **link de incorporação (embed URL)** no campo "Link do Vídeo".
    *   **Arquivo Local:** Se for um vídeo do seu computador, clique em "Escolher arquivo" para selecionar o vídeo. O nome do arquivo será salvo. **Importante:** Para que o vídeo local funcione, você precisará copiar o arquivo de vídeo para a pasta `assets/videos/` (crie esta pasta se não existir dentro da estrutura do site) e o site apenas guardará a referência ao nome do arquivo.
    *   Clique em "Adicionar Vídeo".
*   **Excluir Vídeo:** Clique no botão "Excluir Vídeo" abaixo do vídeo desejado.

### 7. Página de Ideias (`ideias.html`)

*   **Adicionar Nova Ideia:**
    *   Digite a descrição da ideia no campo de texto.
    *   Clique em "Adicionar Ideia".
*   **Excluir Ideia:** Clique no botão "Excluir Ideia" ao lado da ideia desejada.

## Editando Cores e Estilos (`css/style.css` e arquivos CSS específicos)

*   O arquivo principal de estilos é `css/style.css`.
*   Cada página também pode ter um arquivo CSS específico (ex: `css/cartas.css`) para estilos mais detalhados.
*   **Cores Principais:**
    *   **Roxo (Ela):** O tom principal é `#6a0dad`. Variações como `#4b0082` (mais escuro) e `#e0cffc` (mais claro) são usadas.
    *   **Azul (Ele):** O tom principal é `#007bff`. Variações como `#0056b3` (mais escuro) são usadas.
    *   Você pode procurar por esses códigos hexadecimais nos arquivos CSS e substituí-los se desejar alterar as tonalidades.

## Sobre o `localStorage`

Como mencionado, os dados que você adiciona pelos formulários são salvos no `localStorage` do seu navegador. Isso é ótimo para personalização sem precisar de um servidor, mas tem algumas implicações:

*   Os dados são específicos do navegador e do computador onde foram adicionados.
*   Se você limpar o cache/dados de sites do seu navegador, esses dados podem ser perdidos.
*   Não há um "backup" automático desses dados fora do seu navegador.

Se você quiser que certos dados sejam permanentes e parte do "esqueleto" do site (como as características base ou cartas muito importantes), você ainda pode adicioná-los manualmente ao arquivo `js/dados.js`, seguindo a estrutura existente. O site tentará carregar os dados do `localStorage` primeiro; se não encontrar, usará os dados do `js/dados.js` como padrão inicial para algumas seções.

## Estrutura de Pastas (para referência):

*   `index.html`, `caracteristicas.html`, etc. (arquivos principais das páginas)
*   `css/` (contém os arquivos de estilo: `style.css`, `cartas.css`, etc.)
*   `js/` (contém os arquivos JavaScript: `script.js`, `dados.js`)
*   `images/` (para imagens de layout, fotos de perfil base, etc.)
*   `assets/` (pode ser usada para outros recursos, como a subpasta `videos/` para vídeos locais)

Espero que esta nova versão do site traga ainda mais alegria! Se tiver qualquer dúvida, é só perguntar.

