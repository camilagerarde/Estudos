import ComponenteDolar from './ComponenteDolar.js';

export default {
  name: 'ComponenteMercado',
  data() {
    return {
      api: {},
    };
  },
  template: `
  <div>
  <p>Valor de mercado da Apple: {{api.marketCap}}</p>
  <componente-dolar></componente-dolar>
  </div>
  `,
  components: {
    ComponenteDolar,
  },
  methods: {
    getApi() {
      fetch('https://api.origamid.dev/stock/aapl/quote')
        .then(resp => resp.json())
        .then(resp => {
          this.api = resp;
        });
    },
  },
  created() {
    this.getApi();
  },
}
