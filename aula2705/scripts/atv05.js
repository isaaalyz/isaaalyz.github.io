function ex05() {
    const form = document.querySelector('#form05');
    const input = form.querySelector('input[name="in_05"]').value;
    alert(input)
    const dados = JSON.parse(input); 
    const aluno = new Construtora(dados); 

    resolve05(aluno); 
    form.reset();
   
}

function resolve05(obj) {
    let resultado = '';
    resultado += `Id: ${obj.id}<br>`;
    resultado += `Nome: ${obj.nome}<br>`;
    resultado += `Média: ${obj.média}`; 

    document.querySelector('#output').innerHTML = resultado;
    
}

function Construtora(data) {
    this.id = data.id;
    this.nome = data.nome;
    this.média = data.média; 
}
