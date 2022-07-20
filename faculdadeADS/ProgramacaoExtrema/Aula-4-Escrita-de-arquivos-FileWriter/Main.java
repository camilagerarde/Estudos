import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) throws IOException {
		Scanner scanner = new Scanner(System.in);
		System.out.printf("Informe o número de linhas do arquivo:\n");
		int numeroLinhas = scanner.nextInt();

		FileWriter arquivo = new FileWriter("teste.txt");
		PrintWriter writer = new PrintWriter(arquivo);

		for (int i = 1; i <= numeroLinhas; i++) {
			writer.printf("Essa é a linha de número " + i + "%n");
		}
		arquivo.close();
		System.out.printf("Arquivo criado com sucesso!");
	}
}