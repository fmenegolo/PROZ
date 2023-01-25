// Manipulando estilos
let div = document.querySelector("div"); //Capturar elemento e salvar na variavél.
div.style.color = "blue"; // usar notação de pontos atribuindo o valor da propriedade.

//remover um valor atribuido
div.style.color = ""; // retorna valor original do CSS.

//Sintaxe e convenção de escrita camelCase.
// oque no CSS é snake-case no JavaScript é camelCase.

// manipulando tamanho da fonte.
div.style.fontSize = "16px";

//Manipular Classes
let section = document.querySelector("section"); //Capturar elemento e salvar na variavél.
let incluiClasse = section.classList.contains("borda-azul"); // Usar dot notation e método contains() para verificar se possui a classe e retorna um boleano.
console.log(incluiClasse);

let incluiClasse2 = section.classList.contains("texto-novo");
console.log(incluiClasse2);

//Adicionando Classes
section.classList.add("texto-novo"); // Usar metodo add() recebe string o nome a ser adicionado.

//Removendo Classes
section.classList.remove("borda-azul"); //metodo remove() passando o nome do argumento como string.

//Alternando classes "metodo toggle()"
section.classList.toggle("borda-azul");
section.classList.toggle("borda-azul");// ele verifica se o metodo tem a classe e conforme o resultado ele adiciona ou remove o mesmo.

//trabalhar com eventos
let numero = document.querySelector("h1"); // capturar elemento h1, que exibira um número.
let botaoMais = document.querySelector(".botao-mais"); // elemento button, que ativara o comportamento.
let contagem = 0; // declarar variavél de contagem

function adicionarUm(){
    contagem = contagem + 1;
    numero.innerText = contagem;
}; // definir comportamento por uma função, depois exibir o valor via innerText.

adicionarUm();// aparecera 1 ao invez de 0
botaoMais.addEventListener("click", adicionarUm); // função para executar um evento + dois argumentos 1º String que define o tipo de evento 2º é a função ou comportamento a ser executado.


// Uma alternativa, escrevê-la como uma função anônima dentro do parênteses do addEventListener.
let botaoMenos = document.querySelector(".botao-menos");
botaoMenos.addEventListener("click", function(){

  contagem = contagem - 1;

  numero.innerText = contagem;

});

//Também há o uso de arrow functions para declarar a função anônima, substituindo o trecho function( ) por ( ) =>
let botaoLimpar = document.querySelector(".botao-limpar");
botaoLimpar.addEventListener("click", () => {

  contagem = 0;

  numero.innerText = contagem;

});

//Eventos de Mouse
let botaoPassou = document.querySelector(".botao-passou");
let span = document.querySelector("span");
let section2 = document.querySelector(".section2");

//Evento mouseover é diparado quando o mouse passa por cima
function mostrarSpan(){
    span.style.opacity = "100"
}; // Criar uma função que mude a propriedade do elemento span

botaoPassou.addEventListener("mouseover", mostrarSpan);// declarando o evento e a função

// função ocultar quando o mouse sair
function ocultarSpan(){
    span.style.opacity = "0"
};
botaoPassou.addEventListener("mouseout", ocultarSpan)

//Evento click
function fazerUmClick(){
    section2.innerText = "Fez um click simples"
};
botaoPassou.addEventListener("click", fazerUmClick);

// Evento click duplo
function fazerDoisClicks(){
    section2.innerText = "Fez duplo click!"
};
botaoPassou.addEventListener("dblclick", fazerDoisClicks);