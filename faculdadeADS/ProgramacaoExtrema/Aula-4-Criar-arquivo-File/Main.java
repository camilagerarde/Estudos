import java.io.File;
import java.io.IOException;

public class Main {
	public static void main(String[] args) {
		try {
			File arquivo = new File("teste.txt");
			
			if(arquivo.createNewFile()) {
				System.out.println("Arquivo criado" + arquivo.getName());
			} else {
				System.out.println("Arquivo já existe");
			}

		} catch (IOException e) {
			System.out.println("Ops! Ocorreu um erro!");
			e.printStackTrace();;
		}
	}
}