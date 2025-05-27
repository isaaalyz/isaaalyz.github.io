function ex02() {
    const form = document.querySelector('#form02');
    const input = form.querySelector('input[name="in_02"]').value;
    alert(input);

    let valores = [];
    let numero = '';

    for (let i = 0; i < input.length; i++) {
        let caractere = input[i];

        if ((caractere >= '0' && caractere <= '9') || caractere === '.') {
            numero += caractere;
        } else if (caractere === ' ') {
            if (numero !== '') {
                valores.push(parseFloat(numero));
                numero = '';
            }
        }
    }

    if (numero != '') {
        valores.push(parseFloat(numero));
    }

    const media = resolve02(...valores);

    document.querySelector('#output').innerText = `Média: ${media}`;
    form.reset();
}

const resolve02 = (...numeros) => {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length;
    return media.toFixed(2);
};
