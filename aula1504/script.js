const caixa = document.querySelectorAll('.quadradao > div');
const cores = document.querySelectorAll('.quadrado > div');
const seletorQuadrado2 = document.querySelector('.container > .quadrado2');
const seletorCirculo2 = document.querySelector('.container > .circulo2');
const quadradao = document.querySelector('.quadradao');
const quadrado2Formato = document.querySelector('.container > .quadrado2 > div');
const circulo2Formato = document.querySelector('.container > .circulo2 > div');   

function aplicarFormato() {
    caixa.forEach(box => {
        box.style.borderRadius = formatoAtual === 'circulo2' ? '50%' : '0%';
    });

  
    if (formatoAtual === 'quadrado2') {
        seletorQuadrado2.classList.add('selecionado');
        seletorCirculo2.classList.remove('selecionado');
    } else {
        seletorCirculo2.classList.add('selecionado');
        seletorQuadrado2.classList.remove('selecionado');
    }
}

cores.forEach(cor => {
    cor.addEventListener('click', () => {
        corAtual = cor.style.backgroundColor; 
       caixa.forEach(box => {
            box.style.backgroundColor = corAtual;
        });

        
        cores.forEach(c => c.classList.remove('borderClick'));
        cor.classList.add('borderClick');        
        cor.style.backgroundColor = corAtual; 

        if (seletorQuadrado2) {
            seletorQuadrado2.style.backgroundColor = corAtual;
        }
        if (seletorCirculo2) {
            seletorCirculo2.style.backgroundColor = corAtual;
        }
    });
});


seletorQuadrado2.addEventListener('click', () => {
    formatoAtual = 'quadrado2';
    aplicarFormato();
    seletorQuadrado2.classList.add('borderClick');
    seletorCirculo2.classList.remove('borderClick');
});

seletorCirculo2.addEventListener('click', () => {
    formatoAtual = 'circulo2';
    aplicarFormato();
    seletorCirculo2.classList.add('borderClick');
    seletorQuadrado2.classList.remove('borderClick');
});


function alteraTamanho() {
    const valor = document.getElementById('tamanho').value;
    if (valor >= 5 && valor <= 50) {
       caixa.forEach(box => {
            box.style.width = valor * 10 + 'px';
            box.style.height = valor * 10 + 'px';
        });
    } else {
        document.getElementById('tamanho').value = 5;
    }
}

function alteraAlinha() {
    const direction = document.getElementById('flex-Direction').value;
    const justify = document.getElementById('justify-Content').value;
    const align = document.getElementById('align-Items').value;

    quadradao.style.flexDirection = direction;
    quadradao.style.justifyContent = justify;
    quadradao.style.alignItems = align;
}



