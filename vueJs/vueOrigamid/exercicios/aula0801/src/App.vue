<template>
  <div>
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from "./components/Aluno.vue";
import Curso from "./components/Curso.vue";

export default {
  name: "app",
  components: {
    Aluno,
    Curso
  }
};
</script>

<style></style>
