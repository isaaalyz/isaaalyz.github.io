function addSubject() {

     alert("Assunto Cadastrado com Sucesso");
    const form = document.querySelector('#formSubject')
    const input_descricao = form.querySelector('input[name="descricao"]')

   
    const table = document.querySelector('#table_subject');
    const line = document.createElement('tr')
    
    
    const col_id = document.createElement('td')
    col_id.textContent = table.rows.length;
    
    const col_nome = document.createElement('td')
    col_nome.textContent = input_descricao.value
    
    line.appendChild(col_id)
    line.appendChild(col_nome)
    table.appendChild(line)

    
    const select = document.querySelector('#select_subject')
    const op = document.createElement("option")
    op.textContent = input_descricao.value
    op.value = input_descricao.value 
    select.appendChild(op)
    
    
    form.reset()
}