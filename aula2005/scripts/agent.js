function addAgent() {
    alert("Agente Cadastrado com Sucesso");
    // Obtém referência do formulário
    const form = document.querySelector('#formAgent');
    // Obtém o valor dos campos de entrada
    const input_nome = form.querySelector('input[name="nome"]');
    const input_regional = form.querySelector('select[name="regional"]');

    // TABELA
    // Obtém referência da tabela
    const table = document.querySelector('#table_agent tbody'); // Note o tbody aqui
    // Cria um elemento <tr>
    const line = document.createElement('tr');
    // Cria elementos <td>
    const col_id = document.createElement('td'); // Adicionei ID
    const col_nome = document.createElement('td');
    const col_regional = document.createElement('td'); // Corrigi o nome da variável
    
    // Preenche os valores
    col_id.textContent = table.rows.length; // ID sequencial
    col_nome.textContent = input_nome.value;
    col_regional.textContent = input_regional.options[input_regional.selectedIndex].text;
    
    // Adiciona as colunas à linha
    line.appendChild(col_id);
    line.appendChild(col_nome);
    line.appendChild(col_regional);
    
    // Adiciona a linha à tabela
    table.appendChild(line);

    // SELECT
    // Obtém referência do select de agentes
    const select = document.querySelector('#select_agent');
    // Cria um elemento <option>
    const op = document.createElement("option");
    // Configura o option
    op.textContent = input_nome.value;
    op.value = input_nome.value;
    // Adiciona ao select
    select.appendChild(op);
    
    // RESET CAMPOS
    form.reset();
}

// Adiciona o event listener para o formulário
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#formAgent").onsubmit = function(e) {
        e.preventDefault();
        addAgent();
    };
});