<script>
    export let valor;
  </script>
  
  <input type="text" readonly bind:value={valor} />
  
  <style>
    input {
	  font-size: 2rem;
	  width: 250px;
	  margin-bottom: 10px;
	  text-align: right;
	  padding: 5px;
	  border: 2px solid rgb(255, 161, 239);

	}
  </style>
  
  