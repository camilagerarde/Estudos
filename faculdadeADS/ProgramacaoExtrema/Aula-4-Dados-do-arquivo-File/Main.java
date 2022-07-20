import java.io.File;

public class Main {
	public static void main(String[] args) {
		File arquivo = new File("teste.txt");
		
		if(arquivo.exists()) {
			System.out.println("Nome do arquivo: " +  arquivo.getName());
			System.out.println("Caminho absoluto: " +  arquivo.getAbsolutePath());
			System.out.println("Permissão de escrita? " +  arquivo.canWrite());
			System.out.println("Permissão de leitura? " +  arquivo.canRead());
			System.out.println("Tamanho: " +  arquivo.length());
		} else {
			System.out.println("Ops! Esse arquivo não existe");
		}
	}
}