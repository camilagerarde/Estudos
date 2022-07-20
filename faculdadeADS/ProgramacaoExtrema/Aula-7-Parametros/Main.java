public class Main {
	public static void main(String[] args) {
		Cachorro cachorroUm = new Cachorro("Max");
		Cachorro cachorroDois = cachorroUm;

		alteraNomeDoCachorro(cachorroUm);

		System.out.println(cachorroUm.getNome() == cachorroDois.getNome());
		System.out.println(cachorroUm.getNome());
		System.out.println(cachorroDois.getNome());  
	}

	public static void alteraNomeDoCachorro(Cachorro cachorro) {
		cachorro = new Cachorro("Fifi");
		cachorro.getNome().equals("Fifi");
	}
}