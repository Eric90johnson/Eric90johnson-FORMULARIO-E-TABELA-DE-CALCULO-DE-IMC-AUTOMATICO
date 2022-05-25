var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
	console.log("Buscando pacientes");
	
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		
		var erroAjax = document.querySelector("#erro-ajax");

		if(xhr.status == 200) {
			erroAjax.classList.add("invisivel"); //se link não tiver nenhum erro a logica segue.
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);

			pacientes.forEach( function(paciente){
				adicionaPacienteNaTabela(paciente);
			});
		} else {
			console.log( xhr.status)
			console.log( xhr.responseText)
			
			erroAjax.classList.remove("invisivel"); //se houver erro no link, sera informado uma msg no html.
		}

	});

	xhr.send();
});