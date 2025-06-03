<script>
	import Display from './Display.svelte';
	import Keyboard from './Keyboard.svelte';
  
	let valorVisor = "0";
  
	function adicionarNoVisor(tecla) {
	  if (valorVisor === "0" && tecla !== ".") {
		valorVisor = tecla;
	  } else {
		valorVisor += tecla;
	  }
	}
  
	function limparVisor() {
	  valorVisor = "0";
	}
  
	function calcularResultado() {
	  try {
		valorVisor = eval(valorVisor).toString();
	  } catch (e) {
		valorVisor = "Erro";
	  }
	}
  </script>
  <body>
	<div class="container">
		<h2>CALCULADORA - OPERAÇÕES BÁSICAS</h2>
		<Display valor={valorVisor} />
		<Keyboard onClicarTecla={adicionarNoVisor} onLimpar={limparVisor} onCalcular={calcularResultado} />
	  </div>
  </body>
 
  
  <style>

	body{
		background-color: rgb(219, 4, 166);
	}
	.container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}

	h2{
		color: white;
	}
  
  </style>
  