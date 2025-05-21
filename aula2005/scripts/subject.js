function addSubject() {
    alert("Assunto Cadastrado com Sucesso");
    const form = document.querySelector('#formSubject');
    const input_descricao = form.querySelector('input[name="descricao"]');
    const descricao = input_descricao.value;

    subjects.push(descricao);

    const table = document.querySelector('#table_subject tbody');
    const row = table.insertRow();
    row.innerHTML = `<td>${subjects.length}</td><td>${descricao}</td>`;

    const select = document.querySelector('#select_subject');
    const option = new Option(descricao, descricao);
    select.appendChild(option);

    drawChart();
    form.reset();
}
