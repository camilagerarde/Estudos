import javax.swing.*;

class Main {
  public static void main(String entrada[]) {
    int numeroUm, numeroDois, divisao;
    double potencia;
    String mensagem = "";

    numeroUm = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro"));
    numeroDois = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro"));

		divisao = (int) numeroUm / (int) numeroDois;
    potencia = Math.pow(numeroUm, numeroDois);

    mensagem = mensagem + "Você inseriu os números " + numeroUm + " e " + numeroDois + "\n";
    mensagem = mensagem + "Quociente da divisão do primeiro número pelo segundo número = " + divisao + "\n";
    mensagem = mensagem + "Potência do primeiro número  pelo  segundo número = " + potencia + "\n";

    JOptionPane.showMessageDialog(null, mensagem);

    System.exit(0);
  }
}
