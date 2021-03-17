/* Escreva um programa que use console.log para imprimir todos os números de 1 a 100, com duas exceções:
- Para números divisíveis por 3, imprima "Fizz" ao invés de número
- Para números divisíveis por 5 (mas não por 3), imprima "Buzz".
- Quando isto esteja funcionando, modifique o seu programa para imprimir "FizzBuzz" para os números que 
sejam divisíveis tanto por 3 como por 5 (e que continue imprimindo "Fizz" ou "Buzz" para números divisíveis 
por somente um deles).*/


for (let i= 1; i <= 100; i++) {
// divisíveis por 3 e 5. (Colocado em primeiro pois dá erro no código) 
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log ("FizzBuzz")
// divisíveis por 3.  
    } else if (i % 3 === 0) {
      console.log ("Fizz")
// divisíveis por 5.  
    } else if (i % 5 === 0) {
      console.log("Buzz")
// outros.  
    } else {
      console.log(i)
    }
  }