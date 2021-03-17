export default {
  name: 'ComponenteDolar',
  data() {
    return {
      api: {}
    };
  },
  template: `
  <p>Dolar: {{api.rates.USD}} x Real: {{api.rates.BRL.toFixed(2)}}</p>
  `,
  methods: {
    getApi() {
      fetch('https://api.exchangeratesapi.io/latest?base=USD')
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
