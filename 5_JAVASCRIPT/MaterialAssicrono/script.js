console.log("Hello world");
        let num1 = 15;
        let num2 = 27;
        console.log(num1 + num2);

// Selecionar elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);

// Selecionar elemento por nome de classe
const textos = document.getElementsByClassName("texto-simples");
console.log(textos);
console.log(textos[0]);

// Selecionar elemento sem Classe ou Id
const segundoTitulo = document.querySelector("div h2");
console.log(segundoTitulo);

// Usando um seletor CSS
const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);

// Acessando innerText
let elementoH1 = document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.innerText);

//Acessando innerHTML
let elementoMain = document.querySelector("main");
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);

//Manipulando DOM com innerText
elementoH1.innerText = "Novo título com JS";

//Manipulando DOM com innerHTML
elementoMain.innerHTML = `
<h2>Novo Subtítulo</h2>
<ul>
        <li>Elemento de lista JS 01</li>
        <li>Elemento de lista JS 02</li>
        <li>Elemento de lista JS 03</li>
</ul>
`;

//concatenação em JavaScript
let nome = "Rafael";
let sobrenome = "Pereira";
let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);
let nomeCompleto2 = "Meu nome é: "+ nome + " " + sobrenome;
console.log(nomeCompleto2);

//Interpolação em JavaScript
let templateString = `Meu nome é: ${nome} ${sobrenome}`; // com $ insere diretamente a variável na string
console.log(templateString);

let templateString2 = `Meu nome é: ${nome} 
Meu sobrenome é: ${sobrenome} `;//Usando acento grave permite quebra de linha
console.log(templateString2);

let numA = 5;
let numB = 9;
let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`; // dentro das chaves é interpretado codigo JS
console.log(soma);

//criando elementos no DOM
let elementoJavaScript = document.createElement("li"); // 1. Cria Elemento
elementoJavaScript.innerText = "JavaScript"; // 2. Add Texto
elementoJavaScript.id = "ling-js"; // 2. Atribuir id
let listaLinguagens = document.querySelector(".lista-linguagens"); // 3. capturar elemento e salvar na variável
listaLinguagens.appendChild(elementoJavaScript); // 3. add elementos na lista

console.log(elementoJavaScript);

// Add Elementos Complexos
const postagemJavaScript = document.createElement("div"); // 1. Criando elemento div e guardando na variavel
postagemJavaScript.innerHTML = 
`<h2 class="post-titulo">JavaScript</h2>
 <p class+"post-texto">
  JavaScript é uma linguagem de programação
  <p>`; // 2. Usar innerHTML e iserir conteudo em um template String
  const postagens = document.querySelector(".postagens"); // 3. Captura Elemento pai e savamos em uma variável
  postagens.appendChild(postagemJavaScript);// 3. add elemento através do método appendChild