import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Integer dividendo = scanner.nextInt();
    Integer divisor = scanner.nextInt();

    try {
      fazDivisao(dividendo, divisor);
    } catch (IllegalArgumentException ex) {
      System.out.println("Illegal");
      System.out.println(ex.getMessage());
      System.out.println("Tipo de Exceção: " + ex.getClass().getCanonicalName());
    } catch (ArithmeticException ex) {
      System.out.println("Arithmetic");
      System.out.println(ex.getMessage());
      System.out.println("Tipo de Exceção: " + ex.getClass().getCanonicalName());
    }
  }

  private static void fazDivisao(Integer dividendo, Integer divisor)
      throws IllegalArgumentException, ArithmeticException {
    if (dividendo <= 0) {
      throw new IllegalArgumentException("Dividendo não pode ser zero ou negativo!");
    }

    if (divisor <= 0) {
      throw new ArithmeticException("Divisor não pode ser zero ou negativo!");
    }

    Integer quociente = dividendo / divisor;
    System.out.println("Resultado: " + quociente);
  }
}