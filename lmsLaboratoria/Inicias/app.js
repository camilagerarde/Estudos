//perguntar nome e sobrenome
let name = prompt("Qual o seu nome e sobrenome?");

//primeira inicial
let firstInitial = name.slice(0,1);

//posição da segunda inicial
let secondInitialPosition = name.indexOf(" ")+1;

//segunda inicial
let secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

//visualizar no navegador
document.write ("Suas iniciais são: "+ firstInitial.toUpperCase()+secondInitial.toUpperCase());
