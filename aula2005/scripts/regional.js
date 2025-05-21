function addRegional() {
    alert("Região Cadastrada com Sucesso!");
    const form = document.querySelector('#formRegional');
    const sigla = form.querySelector('input[name="sigla"]').value;
    const cidade = form.querySelector('input[name="cidade"]').value;

    regionals.push({ sigla, cidade });

    const table = document.querySelector('#table_regional tbody');
    const row = table.insertRow();
    row.innerHTML = `<td>${regionals.length}</td><td>${sigla}</td><td>${cidade}</td>`;

    const select = document.querySelector('#select_regional');
    const option = new Option(`${sigla} - ${cidade}`, sigla);
    select.appendChild(option);

    drawChart();
    form.reset();
}
