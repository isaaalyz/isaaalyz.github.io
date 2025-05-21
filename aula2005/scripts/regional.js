function addRegional() {
    alert("Região Cadastrada com Sucesso!");
    
    // Obtém referência do formulário
    const form = document.querySelector('#formRegional');
    
    // Obtém os valores dos campos de entrada
    const input_sigla = form.querySelector('input[name="sigla"]');
    const input_cidade = form.querySelector('input[name="cidade"]');

    // TABELA
    const table = document.querySelector('#table_regional');
    const line = document.createElement('tr');
    
    // Coluna ID
    const col_id = document.createElement('td');
    col_id.textContent = table.rows.length;
    
    // Coluna Sigla
    const col_sigla = document.createElement('td');
    col_sigla.textContent = input_sigla.value;
    
    // Coluna Cidade
    const col_cidade = document.createElement('td');
    col_cidade.textContent = input_cidade.value;
    
    // Monta a linha
    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);
    table.appendChild(line);

    // SELECT (para o formulário de Agentes)
    const select = document.querySelector('#select_regional');
    const op = document.createElement("option");
    
    // Você pode escolher mostrar sigla ou cidade no select
    op.textContent = `${input_sigla.value} - ${input_cidade.value}`;
    op.value = input_sigla.value; // Ou pode usar o ID se preferir
    
    select.appendChild(op);
    
    // RESET CAMPOS
    form.reset();
}