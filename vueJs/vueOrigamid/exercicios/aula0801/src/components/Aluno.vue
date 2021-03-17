<template>
  <div>
    <h2>Aluno {{ usuario }}</h2>
    <h3>Aulas assistidas</h3>
    <ul>
      <li v-for="(aula, index) in aulasCompletas" :key="index">
        {{ aula }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Aluno",
  computed: {
    ...mapState(["usuario", "aulasCompletas"])
  }
};
</script>

<style></style>
