public class DivisaoPorZeroException extends Exception {
  public DivisaoPorZeroException() {
    super("Divisão por zero ou negativo não é possível!");
  }
}