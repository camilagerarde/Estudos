public class Main {
	public static void main(String[] args) {
		Cachorro cachorroUm = new Cachorro("Max");
		Cachorro cachorroDois = new Cachorro("Rex");

		if(cachorroUm.equals(cachorroDois)) {
		System.out.println("São iguais!");
		} else {
		System.out.println("São diferentes!");  
		}

		System.out.println(cachorroUm .toString());  
	}
}