class Main {
  public static void main(String[] args) {
    Livro livroAventura = new LivroAventura();
		livroAventura.ler();
		livroAventura.vender();

    /* A partir do contrato da interface, 
      mesmo que a implemetação mude,
      o contrato é o mesmo */
    livroAventura = new LivroTerror();
		livroAventura.ler();
		livroAventura.vender();

    LivroAbstrato livro = new LivroRomance();
    livro.ler();
    livro.vender();
  }
}