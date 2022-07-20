import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.printf("Informe o caminho absoluto do arquivo de texto:\n");
		String caminhoDoArquivo= scanner.nextLine();

		try {
			FileReader arquivo = new FileReader(caminhoDoArquivo);
			BufferedReader reader = new BufferedReader(arquivo);

			String linha = reader.readLine(); //Lê a primeira linha
			while (linha != null) {
				System.out.printf("%s\n", linha);

				linha = reader.readLine(); //Lê da segunda até a última linha
			}
			arquivo.close();
		} catch (IOException e) {
			System.out.printf("Erro na abertura do arquivo: %s. \n", e.getMessage());
		}

		System.out.println();
	}
}