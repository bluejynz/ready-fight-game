// Função para criar o personagem
function createCharacter() {
    const charName = document.getElementById('char-name').value;
    const charClass = document.getElementById('char-class').value;

    // Verifica se o nome do lutador foi inserido
    if (charName.trim() === '') {
        alert('Por favor, insira um nome para o seu lutador.');
        return;
    }

    // Cria um objeto lutador com base na classe selecionada
    const newCharacter = {
        nome: charName,
        classe: getClasses()[charClass].nome,
        saude: classes[charClass].saudeInicial,
        energia: classes[charClass].energiaInicial,
        habilidades: classes[charClass].habilidades,
    };

    saveCharacter(newCharacter);
    alert('Informações salvas. Agora vamos distribuir os pontos aos atributos.');
    window.location.href = 'diceattributes/attributes.html';
}

// Função para voltar para a página inicial
function goBack() {
    window.location.href = '/index.html';
}
