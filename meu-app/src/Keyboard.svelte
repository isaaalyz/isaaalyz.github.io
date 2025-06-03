<script>
    export let onClicarTecla;
    export let onLimpar;
    export let onCalcular;
  </script>
  
  <div class="teclado">
    {#each ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "=", "0", "C", "/"] as tecla}
      <button
        on:click={() => {
          if (tecla === "C") onLimpar();
          else if (tecla === "=") onCalcular();
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
      grid-template-columns: repeat(4, 50px);
      gap: 5px;
    }
  
    button {
      font-size: 1.5rem;
      padding: 10px;
      background-color: rgb(255, 161, 239);
      color: white;
      border: none;
      border-radius: 5px;
    }
  </style>
  