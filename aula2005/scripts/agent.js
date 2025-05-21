function addAgent() {
    alert("Agente Cadastrado com Sucesso");
    const form = document.querySelector('#formAgent');
    const nome = form.querySelector('input[name="nome"]').value;
    const regional = form.querySelector('select[name="regional"]').value;

    agents.push({ nome, regional });

    const table = document.querySelector('#table_agent tbody');
    const row = table.insertRow();
    row.innerHTML = `<td>${agents.length}</td><td>${nome}</td><td>${regional}</td>`;

    const select = document.querySelector('#select_agent');
    const option = new Option(nome, nome);
    select.appendChild(option);

    drawChart();
    form.reset();
}
