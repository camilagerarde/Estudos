public class LivroAventura implements Livro {
	@Override
	public void ler() {
		System.out.println("Lendo aventura...");
	}

	@Override
	public void vender() {
		System.out.println("Vendendo a aventura...");
	}
}