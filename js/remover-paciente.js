var pacientes = document.querySelectorAll(".paciente");

/*
1º forma - Porem tem que ser criada para cada linha que for add. Obs. Não exclui novos pacientes.

//função para remover com duplo click.

pacientes.forEach(function(paciente) {
	paciente.addEventListener("dblclick", function() {
		console.log("Fui clicado com duplo click")
		this.remove();
	});
});
*/

/*
//2º Forma atraves da bolha de eventos. Obs. Exclui novos pacientes.

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
	//Pode ser feito por variavel como abaixo:
	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover

	//pode ser feito com todos os eventos juntos como abaixo:
	//event.target.parentNode.remove()


	paiDoAlvo.remove();
});

*/

//3º forma com animação
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});