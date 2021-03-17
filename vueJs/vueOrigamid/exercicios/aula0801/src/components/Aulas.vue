<template>
  <div>
    <h3>Aulas</h3>
    <ul>
      <li v-for="(aula, index) in data" :key="index">
        <p>{{ aula.nome }} | {{ aula.duracao }} minutos</p>
        <button @click="COMPLETAR_AULA(aula.nome)">Completar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Aulas",
  data() {
    return {
      data: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["COMPLETAR_AULA"])
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}
ul li {
  list-style: none;
}
</style>
