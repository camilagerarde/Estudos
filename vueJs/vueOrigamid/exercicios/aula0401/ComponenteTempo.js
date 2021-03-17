export default {
  name: 'ComponenteTempo',
  data() {
    return {
      api: {},
    };
  },
  template: `
  <p>Temperatura de hoje: {{api}}</p>
  `,
  methods: {
    getApi() {
      fetch('https://www.metaweather.com/api/location/455827/')
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
