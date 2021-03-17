const vm = new Vue({
  el: '#app',
  data: {
    products: [],
    product: false,
    bag: [],
    bagActive: false,
    alertMessage: '',
    alertActive: false,
  },
  filters: {
    forPrice(value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }
  },
  computed: {
    totalBag() {
      let total = 0;
      if (this.bag.length) {
        this.bag.forEach(item => {
          total += item.price;
        });
      }
      return total;
    }
  },
  methods: {
    fetchProducts() {
      fetch('./api/products.json')
        .then(resp => resp.json())
        .then(resp => {
          this.products = resp;
        });
    },
    fetchProduct(id) {
      fetch(`./api/products/${id}/data.json`)
        .then(resp => resp.json())
        .then(resp => {
          this.product = resp;
        });
    },
    openModal(id) {
      this.fetchProduct(id);
      window.scrollTo({ 
        top: 0,
        behavior: 'smooth'
      });
    },
    closeModal({
      target,
      currentTarget
    }) {
      if (target === currentTarget) {
        this.product = false;
      };
    },
    addBag() {
      this.product.storage--;
      const { id, name, price } = this.product;
      this.bag.push({ id, name, price });
      this.alert(`${name} foi adicionando ao carrinho!`);
    },
    removeBag(index) {
      this.bag.splice(index, 1);
    },
    closeBag({ target, currentTarget }) {
      if (target === currentTarget) this.bagActive = false;
    },
    checkLocalStorage() {
      if (window.localStorage.bag) this.bag = JSON.parse(window.localStorage.bag);
    },
    compareStorage() {
      const items = this.bag.filter(({ id }) => id === this.product.id)
      this.product.storage = this.product.storage - items.length;
    },
    alert(message) {
      this.alertMessage = message;
      this.alertActive = true;
      setTimeout(() => {
        this.alertActive = false
      }, 1500);
    },
    router() {
      const hash = document.location.hash.replace('#', '');
      if (hash) this.fetchProduct(hash);
    }
  },
  watch: {
    product() {
      document.title = this.product.name || 'Tech Market';
      const hash = this.product.id || '';
      history.pushState(null, null, `#${hash}`);
      if (this.product) {
        this.compareStorage();
      }
    },
    bag() {
      window.localStorage.bag = JSON.stringify(this.bag);
    }
  },
  created() {
    this.fetchProducts();
    this.checkLocalStorage();
    this.router();
  }
})