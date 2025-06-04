<script>
    export let onClicarTecla;
    export let onLimpar;
    export let onCalcular;
  </script>
  
  <div class="teclado">
    {#each ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "=", "0", "C", "/"] as tecla}
      <button
        on:click={() => {
          if (tecla == "C") onLimpar();
          else if (tecla == "=") onCalcular();
          else onClicarTecla(tecla);
        }}
      >
        {tecla}
      </button>
    {/each}
  </div>
  
  <style>
    .teclado {
      display: grid;
      grid-template-columns: repeat(4, 200px);
      gap: 10px;
    }
  
    button {
      font-size: 50px;
      padding: 30px;
      background-color: rgb(255, 161, 239);
      color: white;
      border: none;
      border-radius: 10px;
    }
    button:active {
    background-color: rgb(255, 120, 220); 
     
}

  </style>
  