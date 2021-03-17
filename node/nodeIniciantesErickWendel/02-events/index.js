//EVENTO DE CLICK
/*
const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}
const emissor = new MeuEmissor();
const nomeEvento = "usuario:click";
emissor.on(nomeEvento, function (click) {
  console.log("o usuário clicou", click);
});

emissor.emit(nomeEvento, "na barra de rolagem");
let count = 0;
setInterval(function () {
  emissor.emit(nomeEvento, "no ok " + count++);
}, 1000);
*/

//EVENTO DE ESCUTA - NÃO COLOCAR NUMA PROMISE, PORQUE ELA SÓ ESCUTARÁ 1 VEZ.
/*
const stdin = process.openStdin();
stdin.addListener("data", function (value) {
  console.log(`você digitou: ${value.toString().trim()}`);
});
*/
