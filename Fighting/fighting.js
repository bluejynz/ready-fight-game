const savedCharacter = loadCharacter(); // Função para carregar o personagem
if (savedCharacter) {
    displayPlayerInfo();
} else {
    displayText("Lutador não encontrado.")
}

// Função para exibir informação do lutador
function displayPlayerInfo() {
    const charInfoElement = document.getElementById('char-info');
    const enemyInfoElement = document.getElementById('enemy-info');
    charInfoElement.innerHTML = displayCharInfo("Lutador", savedCharacter);
    enemyInfoElement.innerHTML = displayCharInfo("Inimigo", generateEnemy());
}

// Função para exibir texto do jogo na área de saída
function displayText(text) {
    const outputElement = document.getElementById('game-output');
    outputElement.innerHTML += `<p id="game-text">${text}</p>`;
    outputElement.scrollTop = outputElement.scrollHeight; // Rolar para o final da área de saída
}

// Função para limpar a área de saída do jogo
function clearOutput() {
    const outputElement = document.getElementById('game-output');
    outputElement.innerHTML = '';
}

// Exemplo de função para processar ação do jogador (atacar)
function attackEnemy() {
    // Lógica para atacar o inimigo e exibir o resultado na área de saída
    displayText('Você atacou o inimigo!');
}

// Função para recuperar o personagem do localStorage
function loadCharacter() {
    const characterString = localStorage.getItem('savedCharacter');
    if (characterString) {
        const character = JSON.parse(characterString);
        console.log('Personagem carregado:', character);
        return character;
    } else {
        console.log('Nenhum personagem salvo encontrado.');
        return null;
    }
}

// Função para voltar para a página inicial
function goBack() {
    window.location.href = '/index.html';
}
