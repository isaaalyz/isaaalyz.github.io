function addReport() {
    alert("Relatório Cadastrado com Sucesso!");
    
    // Obtém referência do formulário
    const form = document.querySelector('#formReport');
    
    // Obtém os valores dos campos de entrada
    const input_data = form.querySelector('input[name="data"]');
    const input_assunto = form.querySelector('select[name="assunto"]');
    const input_agente = form.querySelector('select[name="agente"]');

    // TABELA
    const table = document.querySelector('#table_report tbody'); // Note o tbody aqui
    const line = document.createElement('tr');
    
    // Coluna ID
    const col_id = document.createElement('td');
    col_id.textContent = table.rows.length + 1;
    
    // Coluna Data
    const col_data = document.createElement('td');
    col_data.textContent = formatarData(input_data.value); // Função para formatar a data
    
    // Coluna Assunto
    const col_assunto = document.createElement('td');
    col_assunto.textContent = input_assunto.options[input_assunto.selectedIndex].text;
    
    // Coluna Agente
    const col_agente = document.createElement('td');
    col_agente.textContent = input_agente.options[input_agente.selectedIndex].text;
    
    // Monta a linha
    line.appendChild(col_id);
    line.appendChild(col_data);
    line.appendChild(col_assunto);
    line.appendChild(col_agente);
    table.appendChild(line);

    // RESET CAMPOS
    form.reset();
}

// Função auxiliar para formatar data (opcional)
function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR'); // Formato brasileiro
}

// Adiciona o event listener para o formulário
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#formReport").onsubmit = function(e) {
        e.preventDefault();
        addReport();
    };
});