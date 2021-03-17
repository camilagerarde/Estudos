export default {
  name: 'ComponenteLista',
  props: ['lista'],
  template: `
  <ul>
    <li v-for="(item, index) in lista">Moeda: {{index}} - Valor: {{item.toFixed(3)}}</li>
  </ul>
  `
}