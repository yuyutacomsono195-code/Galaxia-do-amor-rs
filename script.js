const container = document.getElementById('chuva-amor');
const estrelasContainer = document.getElementById('estrelas');

// Frases com os emojis que você escolheu 🦴🤍
const frases = [
    'Eu te amo 🦴🤍',
    'Eu te amo 🤍🦴',
    'Eu te amo 🦴🤍✨',
    'Eu te amo 🤍🦴🌌',
    'Eu te amo 🦴🤍💫'
];

// Criar estrelas de fundo
function criarEstrelas(qtd) {
    for (let i = 0; i < qtd; i++) {
        const estrela = document.createElement('div');
        estrela.style.position = 'absolute';
        estrela.style.width = Math.random() * 2 + 1 + 'px';
        estrela.style.height = estrela.style.width;
        estrela.style.left = Math.random() * 100 + '%';
        estrela.style.top = Math.random() * 100 + '%';
        estrela.style.background = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
        estrela.style.borderRadius = '50%';
        estrela.style.boxShadow = `0 0 ${Math.random() * 3 + 1}px rgba(255, 255, 255, 0.4)`;
        estrelasContainer.appendChild(estrela);
    }
}

criarEstrelas(300);

// Criar chuva de "Eu te amo" 🦴🤍
function criarAmor() {
    const elemento = document.createElement('div');
    elemento.classList.add('amor');
    
    const frase = frases[Math.floor(Math.random() * frases.length)];
    elemento.textContent = frase;
    
    const esquerda = Math.random() * 90 + 5;
    const duracao = Math.random() * 6 + 7;
    const tamanho = Math.random() * 7 + 14;
    
    elemento.style.left = esquerda + '%';
    elemento.style.fontSize = tamanho + 'px';
    elemento.style.animationDuration = duracao + 's';
    
    container.appendChild(elemento);
    
    setTimeout(() => {
        elemento.remove();
    }, duracao * 1000);
}

setInterval(criarAmor, 600);
