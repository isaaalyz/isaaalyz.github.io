function ex04() {
    const form = document.querySelector('#form04');
    const input = form.querySelector('input[name="in_04"]').value;
    alert(input)
    
    const valores = input.split(' ').map(Number);
    const perfeitos = valores.filter(filter_perfeito);

    let resultado = '';
    perfeitos.forEach((val, index) => {
        resultado += val;
        if (index < perfeitos.length - 1) {
            resultado += " ";
        }
    });

    document.querySelector('#output').innerHTML = resultado;
    form.reset();
}

const filter_perfeito = (val) => {
    if (val <= 1) return false;

    let soma = 0;
    for (let i = 1; i <= val / 2; i++) {
        if (val % i === 0) {
            soma += i;
        }
    }

    return soma === val;
};
