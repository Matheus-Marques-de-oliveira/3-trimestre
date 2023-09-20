//-------------------------------------------------------------
//daqui pra baixo começa o js do site

//busca no site pelo titulo e armazena dentro da variavel titulo
let titulo = document.querySelector(".titulo");

//mostra no devtools o conteudo de texto da variavel titulo
console.log(titulo.textContent);

//altera o conteudo da variavel titulo para o texto desejado
titulo.textContent = "Fica China pasta";

//mudanças na tabela
//armazena na variavel paciente os dados primeiros
let pacientes = document.querySelectorAll("#primeiro-paciente");

//mostra on console  o valor da variavel
console.log(pacientes);
for(0)

let tdPeso = paciente.querySelector("info-peso");
let tdAltura = paciente.querySelector("info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhvalido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!");
    alturaEhvalido = false;
}

if(pesoEhvalido && alturaEhvalido){
    let imc = (altura*altura)
    tdAltura.imc
}
