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

    console.log('Lutador criado:', newCharacter);
    saveCharacter(newCharacter);
}

// Função para voltar para a página inicial
function goBack() {
    window.location.href = '/index.html';
}
