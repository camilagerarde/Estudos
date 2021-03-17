<template>
  <div>
    <h3>Entre em contato conosco:</h3>
    <form>
      <input type="text" placeholder="Insira seu nome">
      <input type="email" placeholder="Insira seu email">
      <textarea cols="30" rows="5">Coloque sua mensagem aqui</textarea>
      <button @click.prevent="mostraConsole">Enviar</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contato',
    methods: {
      mostraConsole() {
        console.log('oi!');
      }
    }
  }
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 30%;
}
</style>
