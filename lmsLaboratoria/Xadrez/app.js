/* Elabore um programa que crie um string que represente um quadrado de 8x8, pulando uma linha como separador. 
Em cada posição do quadrado deve haver um espaço ou um caracter "#". 
Os caracteres devem formar um tabuleiro de xadrez.
Passar este string a console.log deve mostrar algo assim:
 # # # #
# # # #
 # # # #
# # # #

Quando você tiver um programa que gere este padrão, defina uma variável size = 8 
e mude o programa para que trabalhe para qualquer tamanho, que seja proporcionado por um prompt() .*/



// definição do tamanho
let size = parseInt(prompt ("Qual o tamanho?"));
// variável vazia para definição de espaço ou # no código
let string = "";

//Define a linha - inicialmente onde se encontra variável size estava o número 8
for (let i = 1; i <= size; i++) {
  //Define a coluna - inicialmente onde se encontra variável size estava o número 8
  for (let j = 1; j <= size; j++) {
    if ((i+j) % 2 === 0) {
      string += " "
    } else {
      string += "#"
    }
  }
  // quebra de linha para o formato em tabuleiro
  string += "\n"
}
console.log (string)