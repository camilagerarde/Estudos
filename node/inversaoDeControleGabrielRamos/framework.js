const framework = {
  prefixo: 'criar',
  // lista de dependências
  dependencias: [],
  // container que irá armazenar os objetos/dependências
  constainer: {},
  registrar(dependencia) {
    console.log(`Registrando ${dependencia.name}`);
    this.dependencias.push(dependencia);
  },
  construir() {
    console.log('Iniciando injeção de dependências');
    this.dependencias.forEach((dependencia) => {
      let nomeFn = dependencia.name;
      nomeFn = nomeFn.replace(this.prefixo, '').toLowerCase();
      console.log(`Construindo dependências em ${nomeFn}`);
      // Atualiza o valor do container contendo todo o valor prévio 
      // e uma nova chave com o nome da função onde seu valor será a 
      // execução da própria função recebendo todo o container como dependência
      this.constainer = {
        ...this.constainer,
        [nomeFn]: dependencia(this.constainer)
      }
    })
  },
  iniciar() {
    console.log('Iniciando aplicação');
    this.constainer.app();
  }
};

const criarNome = () => () => {
  return 'Luke Skywalker';
}

const criarPlaneta = () => nomeCompleto => {
  let [nome] = nomeCompleto.split(' ');
  nome = nome.toLowerCase();

  const planetas = {
    luke: 'asteroid',
    anakin: 'tatooine',
    chewie: 'kashyyyk',
    han: 'corellia',
    desconhecido: 'sem informação'
  };

  const planeta = planetas[nome] || planetas.desconhecido;

  return planeta;
}

const criarApp = ({ nome, planeta }) => () => {
  const personagem = nome();
  const lugar = planeta(personagem);
  console.log(`${personagem} nasceu em ${lugar}`);
};

framework.registrar(criarNome);
framework.registrar(criarPlaneta);
framework.registrar(criarApp);

framework.construir();

framework.iniciar();
