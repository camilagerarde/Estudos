<template>
  <div id="app">
    <modal-alerta>
			<template v-slot:header>
				<h1>Header do Slot</h1>
			</template>
      <template v-slot:default="{ user }">
        {{user.name}}
        <p>{{mensagem}}</p>
      </template>
			<template v-slot:footer>
				<p>Esse é o footer do slot.</p>
			</template>
		</modal-alerta>
  </div>
</template>

<script>
import ModalAlerta from "./components/ModalAlerta.vue";

  export default {
    name: "app",
    components: {
      ModalAlerta
    },
    data() {
      return {
        mensagem: "Isso vai aparecer no slot."
      };
    }
  };
</script>

<style>

</style>
