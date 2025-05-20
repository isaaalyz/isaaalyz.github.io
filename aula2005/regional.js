document.querySelector("#formRegional").onsubmit = function () {
    const form = document.querySelector('#formRegional');
    const inputSigla = form.querySelector('input[name="sigla"]');
    const inputCidade = form.querySelector('input[name="cidade"]');
    const table = document.querySelector("#table_regional");

    // Adicionar regional na tabela
    const row = document.createElement('tr');
    const tdSigla = document.createElement('td');
    tdSigla.textContent = inputSigla.value;
    const tdCidade = document.createElement('td');
    tdCidade.textContent = inputCidade.value;
    row.appendChild(tdSigla);
    row.appendChild(tdCidade);
    table.querySelector('tbody').appendChild(row);

    // Adicionar regional ao select do formulário de agente
    const select = document.querySelector('#select_regional');
    const option = document.createElement('option');
    option.textContent = inputSigla.value;
    option.value = inputSigla.value;
    select.appendChild(option);

    // Reset do formulário
    form.reset();
    return false; // Evita o envio do formulário
};
