import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Integer dividendo = scanner.nextInt();
    Integer divisor = scanner.nextInt();

    try {
      fazDivisao(dividendo, divisor);
    } catch (DivisaoPorZeroException ex) {
      System.out.println(ex.getMessage());
      System.out.println("Tipo de Exceção: " + ex.getClass().getCanonicalName());
    } finally {
      System.out.println("Operação finalizada!");
    }
  }

  private static void fazDivisao(Integer dividendo, Integer divisor)
      throws IllegalArgumentException, ArithmeticException, DivisaoPorZeroException {
    if (dividendo <= 0) {
      throw new DivisaoPorZeroException();
    }

    if (divisor <= 0) {
      throw new DivisaoPorZeroException();
    }

    Integer quociente = dividendo / divisor;
    System.out.println("Resultado: " + quociente);
  }
}