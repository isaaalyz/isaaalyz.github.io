function addReport() {
    alert("Relatório Cadastrado com Sucesso!");
    const form = document.querySelector('#formReport');
    const data = form.querySelector('input[name="data"]').value;
    const assunto = form.querySelector('select[name="assunto"]');
    const agente = form.querySelector('select[name="agente"]');

    const selectedAssunto = assunto.value;
    const selectedAgente = agente.value;

    reports.push({ data, assunto: selectedAssunto, agente: selectedAgente });

    const table = document.querySelector('#table_report tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${reports.length}</td>
        <td>${formatarData(data)}</td>
        <td>${assunto.options[assunto.selectedIndex].text}</td>
        <td>${agente.options[agente.selectedIndex].text}</td>
    `;

    drawChart();
    form.reset();
}

function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}
