<script>
	
	import Tabela from './components/Table.svelte'
    import Dialogo from './components/Dialog.svelte'
    import { fade } from 'svelte/transition'
    

    let invisible = false 
    let tarefa, descricao, prazo, prioridade
    let tarefaSelecionada = null;

	let data = [
		{id: 1, tarefa: "Fazer compras", descricao: "Comprar frutas, legumes e pão", prioridade: "Média", prazo: "12/06/2025", status: false },
		{id: 2, tarefa: "Estudar JavaScript", descricao: "Revisar conceitos de Promises e Async/Await", prioridade: "Alta", prazo: "10/06/2025", status: false },
		{id: 3, tarefa: "Pagar contas", descricao: "Pagar conta de luz e internet", prioridade: "Alta", prazo: "14/06/2025", status: false }
	]

    

    function add() {
        
        let aux = data
        
        let topico = {

            id: data.length +1,
            tarefa: tarefa,
            descricao: descricao,
            prioridade: prioridade,
            prazo: prazo,
            status: false
        }

        aux.push(topico)        
        data = aux

        tarefa = "";
        descricao = "";
        prazo = "";
        prioridade = "";
    }

    function close() {
    invisible = false; 
    tarefaSelecionada = null;
    }

    function remove(index){
        data.splice(index, 1)
        data=[...data];

    }

   function showDialog(task) {
    tarefaSelecionada = {
        id: task.id,
        tarefa: task.tarefa,
        descricao: task.descricao,
        prioridade: task.prioridade,
        prazo: task.prazo,
        situacao: task.status ? "Concluída" : "Pendente"
    };
    invisible = true; 
}

function check(index) {
    data[index].status = !data[index].status;
    data = [...data]; 
}

function atualizarStatusPorData() {
    const hoje = new Date();

    data = data.map(task => {
        const partes = task.prazo.split("/"); 
        const dataPrazo = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);

        if (dataPrazo < hoje && !task.status) {
            return { ...task, status: true }; 
        }

        return task;
    });
}




</script>

<main>
	<h1>Gerenciador de Tarefas - Svelte</h1>
	
	<div class="form-inputs">
        <div class="grid-auto">
            <div>
                <label for="tarefa">Tarefa</label>
                <input type="text" name="tarefa" bind:value={tarefa}/>
            </div>
            <div>
                <label for="prazo">Prazo</label>
                <input type="date" name="prazo"bind:value={prazo}/>
            </div>
            <div>
                <label for="prioridade">Prioridade</label>
                <select name="prioridade"bind:value={prioridade}>
                    <option value="Baixa">Baixa</option>
                    <option value="Média">Média</option>
                    <option value="Alta">Alta</option>
                </select>
            </div>
        </div>
            
        <div class="grid-conf">
            <div>
                <label for="descricao">Descrição</label>
               <textarea name="descricao"bind:value={descricao}></textarea>
            </div>
            <div class="div-btn">
                <button on:click={() => add()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" class="bi bi-floppy-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"/>
                        <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
	
    
	<Tabela tasks={data} remove={remove}  info={showDialog} check={check}/>


    {#if invisible}
    <div transition:fade>
        <Dialogo func={close} dados={tarefaSelecionada}/>
    </div>
{/if}  
    

</main>

<style>

	main {
		text-align: center;
        color: rgb(255, 0, 179);
		padding: 1em;
        background-color: pink;
	}

	h1 {
		margin: 0px;
		margin-bottom: 15px;
        font-size: 38px;
        color: rgb(255, 0, 179);
        text-shadow: 2px 2px 4px white;
    }

	.grid-auto {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 10px;
        box-sizing: border-box;
    }

    .grid-conf {
        display: grid;
        grid-template-columns: 4fr 1fr;
        column-gap: 10px;
        box-sizing: border-box;
    }

    .form-inputs {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        border: 2px solid pink;
        box-shadow: 3px 3px 3px 2px white;
        box-sizing: border-box;
        padding: 10px;
    }

    label {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
    }
    
    input {
        width: 100%;
        border: 1px solid rgb(255, 0, 179);
        border-radius: 6px;
        padding: 5px 10px;
        text-decoration: none;
    }

    textarea {
        width: 100%;
        height: 75px;
        padding: 5px 10px;
    }

    select {
        background-color: white;
        width: 100%;
        border: 1px solid rgb(255, 0, 179);
    }

    button {
        text-decoration: none;
        padding: 15px 15px;
        border-radius: 5px;
        border: none;
        background-color: green;
        color: white;
    }

    button:hover {
        opacity: 0.7;
        cursor:grab;
    }

    .div-btn {
        display: flex;
        justify-content: end;
        align-items: end;
    }

</style>