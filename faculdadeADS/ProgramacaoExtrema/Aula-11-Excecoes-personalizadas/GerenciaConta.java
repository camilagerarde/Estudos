public class GerenciaConta {
  private float saldoConta = 15000f;
  private static float valorMaximo = 20000f;

  public float AdicionaValor(float montante) throws SaldoContaException {
    float total = saldoConta + montante;
    if (total > valorMaximo) {
      throw new SaldoContaException(total);
    }
    return total;
  }
}