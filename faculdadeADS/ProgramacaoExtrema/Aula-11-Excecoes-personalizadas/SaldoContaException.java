public class SaldoContaException extends Exception {
  private float saldoConta;

  public SaldoContaException(float saldo) {
    super();
    this.saldoConta = saldo;
  }

  public SaldoContaException(String msg) {
    super(msg);
  }

  public float getSaldoConta() {
    return this.saldoConta;
  }
}