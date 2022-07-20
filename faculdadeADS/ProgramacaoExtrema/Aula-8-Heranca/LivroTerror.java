public class LivroTerror implements Livro {
	@Override
	public void ler() {
		System.out.println("Lendo terror...");
	}

	@Override
	public void vender() {
		System.out.println("Vendendo o terror...");
	}
}