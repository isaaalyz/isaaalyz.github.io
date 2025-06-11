
<script> 

    export let func
    export let dados = {};

</script>
<main>
    <div  class="container">
        <div class="top-line">
           <button on:click={func}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
            </button>
        </div>
        <div class="content">
          <span><b>ID: </b> {dados.id || 'N/A'}</span>
    <span><b>TAREFA: </b> {dados.tarefa || 'N/A'}</span>
    <span><b>DESCRIÇÃO: </b> {dados.descricao || 'N/A'}</span>
    <span><b>PRIORIDADE: </b> {dados.prioridade || 'N/A'}</span>
    <span><b>PRAZO: </b> {dados.prazo || 'N/A'}</span>
    <span><b>SITUAÇÃO: </b> {dados.situacao || 'N/A'}</span>
        </div>
    </div>
</main>

<style> 

     main {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        display: flex;    
        width: 100%;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 560px;
        height: 320px;
        background-color: pink;
        border: 2px solid rgb(255, 0, 179);
        box-shadow: 3px 3px 3px 2px white;
    }

    .top-line {
        display: flex;    
        justify-content: end;
        margin: 5px;
    }

    button {
        text-align: end;
        text-decoration: none;
        padding: 5px;
        border: none;
        border-radius: 5px;
        background-color: red;
    }

    button:hover {
        opacity: 0.7;
        cursor:grab;
    }

    span {
        margin-bottom: 10px;
        display: block;
    }

</style>