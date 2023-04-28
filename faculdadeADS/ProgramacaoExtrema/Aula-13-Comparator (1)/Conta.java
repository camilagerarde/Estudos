public class Conta {
  private String cliente;
  private double saldo;

  public Conta(String cc, double saldo) {
    this.cliente = cc;
    this.saldo = saldo;
  }

  public String getCliente() {
    return cliente;
  }

  public void setContaCorrente(String cliente) {
    this.cliente = cliente;
  }

  public double getSaldo() {
    return saldo;
  }

  public void setSaldo(double saldo) {
    this.saldo = saldo;
  }

  @Override
  public String toString() {
    return "Cliente: " + this.cliente + " || Saldo R$: " + this.saldo;
  }
}