// Array com as classes disponíveis
const classes = {
    guerreiro: {
        nome: 'Guerreiro',
        saudeInicial: 100,
        energiaInicial: 50,
        habilidades: ['Ataque Poderoso', 'Defesa'],
    },
    mago: {
        nome: 'Mago',
        saudeInicial: 80,
        energiaInicial: 80,
        habilidades: ['Bola de Fogo', 'Escudo Mágico'],
    },
    arqueiro: {
        nome: 'Arqueiro',
        saudeInicial: 90,
        energiaInicial: 60,
        habilidades: ['Flecha Precisa', 'Evasão'],
    },
};

function getClasses() {
    return classes;
}

function displayCharInfo(text, char) {
    let titulo = `<h3 style="text-align:center;">${text}</h3>`;
    let nome = `<div>
        <p><span>Nome: </span>${char.nome}</p>
    </div>`;
    let classe = `<div>
        <p><span>Classe: </span>${char.classe}</p>
    </div>`;
    let vida = `<div>
        <p><span>Vida: </span>${char.saude}</p>
    </div>`;
    let energia = `<div>
        <p><span>Energia: </span>${char.energia}</p>
    </div>`;
    let habilidades = `<div>
        <p><span>Habilidades: </span>${char.habilidades}</p>
    </div>`;
    let charDisplay = titulo + nome + classe + vida + energia + habilidades;

    return charDisplay;
}

// Função para salvar o personagem criado no localStorage
function saveCharacter(character) {
    const characterString = JSON.stringify(character);
    localStorage.setItem('savedCharacter', characterString);
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
generateEnemy();

// Função para salvar o personagem criado no localStorage
function generateEnemy() {
    let classesKeys = Object.keys(classes);
    let index = Math.floor(Math.random() * classesKeys.length);
    let classe = classes[classesKeys[index]];
    const newCharacter = {
        nome: "Jubileu",
        classe: classe.nome,
        saude: classe.saudeInicial,
        energia: classe.energiaInicial,
        habilidades: classe.habilidades,
    };
    return newCharacter;
}
