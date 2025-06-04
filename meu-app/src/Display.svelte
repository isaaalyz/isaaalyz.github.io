<script>
    export let valor;
  </script>
  
  <input type="text" readonly bind:value={valor} />
  
  <style>
    input {
	  font-size: 40px;
	  width: 835px;
	  margin-bottom: 50px;
	  text-align: right;
	  color: rgb(255, 161, 239);
	  padding: 5px;
	  margin-top: 40px;
	  border-radius: 10px;
	  border: 5px solid rgb(255, 161, 239);
	}

	input:focus {
  	outline: none;
	}

  </style>
  
  