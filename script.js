const container = document.getElementById('chuva-amor');
const frases = [
    'Eu te amo 💜',
    'Eu te amo ✨',
    'Eu te amo 💫',
    'Eu te amo 🌌',
    'Eu te amo 💕'
];

function criarAmor() {
    const elemento = document.createElement('div');
    elemento.classList.add('amor');
    
    const frase = frases[Math.floor(Math.random() * frases.length)];
    elemento.textContent = frase;
    
    const esquerda = Math.random() * 90 + 5;
    const duracao = Math.random() * 5 + 6;
    const tamanho = Math.random() * 8 + 14;
    
    elemento.style.left = esquerda + '%';
    elemento.style.fontSize = tamanho + 'px';
    elemento.style.animationDuration = duracao + 's';
    
    container.appendChild(elemento);
    
    setTimeout(() => {
        elemento.remove();
    }, duracao * 1000);
}

setInterval(criarAmor, 600);
