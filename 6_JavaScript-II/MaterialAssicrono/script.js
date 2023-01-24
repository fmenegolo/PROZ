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
