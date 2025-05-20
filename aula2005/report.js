document.querySelector("#formReport").onsubmit = function () {
    const form = document.querySelector('#formReport');
    const inputData = form.querySelector('input[name="data"]');
    const selectAssunto = form.querySelector('select[name="assunto"]');
    const selectAgente = form.querySelector('select[name="agente"]');
    const table = document.querySelector("#table_report");

    // Adicionar relatório na tabela
    const row = document.createElement('tr');
    const tdData = document.createElement('td');
    tdData.textContent = inputData.value;
    const tdAssunto = document.createElement('td');
    tdAssunto.textContent = selectAssunto.value;
    const tdAgente = document.createElement('td');
    tdAgente.textContent = selectAgente.value;
    row.appendChild(tdData);
    row.appendChild(tdAssunto);
    row.appendChild(tdAgente);
    table.querySelector('tbody').appendChild(row);

    // Reset do formulário
    form.reset();
    return false; // Evita o envio do formulário
};
