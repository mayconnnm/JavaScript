	// document retorna todo o html que possui dentro do arquivo
	// querySelector pega qualquer parte do html e retorna
	// document.querySelector("h1");	    
	var titulo = document.querySelector("h1");	    
	// console.log(titulo);
	// textContent retorna o elemento que possui dentro da tag
	titulo.textContent = "Nutricionista";

	// Buscando o conteúdo por uma classe
	var t = document.querySelector(".titulo");
	t.textContent = "Nutrição";

	var pacientes = document.querySelectorAll(".paciente");
	console.log(pacientes);
for(var p = 0; p < pacientes.length; p++){

	var paciente = pacientes[p];
	var peso = paciente.querySelector(".info-peso");
	var info_peso = peso.textContent; 
	var altura = paciente.querySelector(".info-altura");
	var info_altura = altura.textContent;
	var imc = info_peso / (info_altura * info_altura);
	var resultado = paciente.querySelector(".info-imc");
	
	// Arredonda para quantas casas eu desejo que exiba
	resultado.textContent = imc.toFixed(2);

	if(info_peso < 0){
		resultado.textContent = "Peso Inválido";
		// Muda a cor do texto
		// paciente.style.color = "red";
		// Porém não é uma boa prática utilizar css em js, e sim chamar a class ou id do css
		// paciente.style.backgroundColor = "red";

		// Como chamar uma class de um arquivo css
		paciente.classList.add("paciente-invalido");

	}

	if(info_altura < 0){
		resultado.textContent = "Altura Inválido";
		paciente.classList.add("paciente-invalido");
	}

}

	// Passando uma função anônima
	// titulo.addEventListener("click", function(){
	// 	console.log("Função anônima");
	// });

	// // addEventListener é uma função que escuta um evento, ex: escutando um evento de click no elemento e retornando uma função
	// titulo.addEventListener("click", mostraMensagem);

	// function mostraMensagem(){
	// 	console.log("Olá eu fui clicado");
	// }

	var botao = document.querySelector("#adicionar-paciente");
	botao.addEventListener("click", function(){
		console.log(botao);
	})