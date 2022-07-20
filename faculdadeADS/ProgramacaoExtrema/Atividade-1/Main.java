import java.io.IOException;
import java.util.Scanner;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;

class Main {
  public static void main(String[] args) throws IOException {
    Scanner scanner = new Scanner(System.in);
    System.out.printf("Informe o nome do arquivo para a cópia:\n");
    String caminhoDoArquivo = scanner.nextLine();

    InputStream is = null;
    OutputStream os = null;

    try {
      is = new FileInputStream(caminhoDoArquivo);
      os = new FileOutputStream("copia-de-" + caminhoDoArquivo);
      byte[] buffer = new byte[1024];

      int length = 0;
      while ((length = is.read(buffer)) > 0) {
        os.write(buffer, 0, length);
      }
    } catch (Exception e) {
      System.out.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
    } finally {
      System.out.printf("Cópia do arquivo realizada!");
      is.close();
      os.close();
    }
  }
}