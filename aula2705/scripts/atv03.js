function ex03() {
    const form = document.querySelector('#form03');
    const input = form.querySelector('input[name="in_03"]').value;
    alert(input);

    const valores = input.split(' ').map(Number); 
    const resultado = resolve03(valores);

    let saida = '';
    for (let i = 0; i < resultado.length; i++) {
        saida += resultado[i];
        if (i < resultado.length - 1) {
            saida += '<br>';
        }
    }

    document.querySelector('#output').innerHTML = saida;
    form.reset()
}

function resolve03(valores) {
    return valores.map(val => isEven(val) ? 'Par' : 'Ímpar');
}

function isEven(val) {
    return val % 2 === 0;
}
