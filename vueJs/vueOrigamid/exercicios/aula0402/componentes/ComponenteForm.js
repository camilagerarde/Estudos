import ComponenteLista from './ComponenteLista.js'

export default {
  name: 'ComponenteForm',
  data() {
    return {
      api: '',
      moeda: '',
    };
  },
  template:`
  <form>
    <p>Insira a sigla da moeda que deseja verificar a cotação. <br>
    (BRL "Real", USD "Dólar", EUR "Euro", GBP "Libra")</p>
    <input type="text" placeholder="Insira a sigla aqui"  v-model="moeda"/>
    <button @click.prevent="getApi()">Enviar</button>
    <componente-lista :lista="api"></componente-lista>
  </form>
  `,
  components: {
    ComponenteLista
  },
  methods: {
    getApi() {
      let upperCaseMoeda = this.moeda.toUpperCase();
      fetch(`https://api.exchangeratesapi.io/latest?base=${upperCaseMoeda}`)
      .then( resp => resp.json())
      .then( resp => {
        this.api = resp.rates;
      })
    }
  }
}