<!-- 
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
 -->

<template>
  <div id="app">
    <h1>Empresa S.A.</h1>
    <nav>
      <button @click="componenteAtivo = 'Sobre'">Sobre</button>
      <button @click="componenteAtivo = 'Servicos'">Serviços</button>
      <button @click="componenteAtivo = 'Contato'">Contato</button>
    </nav>
      <transition name="fade" mode="out-in"> 
        <keep-alive>
          <component :is="componenteAtivo"></component>
        </keep-alive>
      </transition>
  </div>
</template>

<script type>
import Sobre from './components/Sobre.vue';
import Servicos from './components/Servicos.vue';
import Contato from './components/Contato.vue';

export default {
  name: 'app',
  components: {
    Sobre,
    Servicos,
    Contato
  },
  data() {
    return {
      componenteAtivo: "Sobre"
    }
  }  
}
</script>

<style>
.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}


</style>
