import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner inputDevice = new Scanner(System.in);
    System.out.println("Insira um valor para para depósito");
    float novoValor = inputDevice.nextFloat();

    try {
      float valorTotal = new GerenciaConta().AdicionaValor(novoValor);
      System.out.println("Valor total da conta: " + valorTotal);
    } catch (SaldoContaException ex) {
      System.out.println("Valor da conta ultrapassou limite!");
    }
    inputDevice.close();
  }
}