import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Integer dividendo = scanner.nextInt();
    Integer divisor = scanner.nextInt();

    try {
      Integer quociente = dividendo / divisor;
      System.out.println("Resultado: " + quociente);
    } catch (Exception ex) {
      System.out.println("Causa: " + ex.getCause());
      System.out.println("Mensagem: " + ex.getMessage());
      System.out.println("Tipo de Exceção: " + ex.getClass().getCanonicalName());
      System.out.println("Ops não foi possível obter o resultado ");
    }
  }
}