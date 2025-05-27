function ex01() {
    const form = document.querySelector('#form01');
    const input = form.querySelector('input[name="in_01"]').value;
    alert(input)

    let valores = [];
    let numero = '';

    for (let i = 0; i < input.length; i++) {
        let caractere = input[i];

        if ((caractere >= '0' && caractere <= '9') || caractere == '.') {
            numero += caractere;
        } else if (caractere == ' ') {
            if (numero != '') {
                valores.push(parseFloat(numero));
                numero = '';
            }
        }
    }

    
    if (numero != '') {
        valores.push(parseFloat(numero));
    }

    const media = resolve01.apply(null, valores);

    document.querySelector('#output').innerText = `Média: ${media}`;
    form.reset();
}

function resolve01() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    const media = soma / arguments.length;
    return media.toFixed(2);
}


    
   




