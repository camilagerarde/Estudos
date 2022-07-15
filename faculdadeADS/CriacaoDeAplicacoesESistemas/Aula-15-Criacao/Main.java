import javax.swing.*;

class Main {
  public static void main(String entrada[]) {
    int num1, num2, produto = 1;
    char opcao = '0';
    String msg = "", msgEntrada = "Digite 1 para multiplicação\nDigite 2 para produtória\n";

    // entrada de dados
    num1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro"));
    num2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro"));
    opcao = (JOptionPane.showInputDialog(msgEntrada)).charAt(0);

    // processamento
    switch (opcao) {
      case '1': {
        if (num1 > 0 && num2 > 0) {
          produto = num1 * num2;
          msg = msg + "Produto de " + num1 + " por " + num2 + " = " + produto + ".\n\n";
        } else {
          msg = msg + "Multiplicação feita somente com números positivos.\n\n";
        }
        break;
      }
      case '2':
        for (int i = 1; i <= num2; i = i + 1) {
          produto = produto * num1;
        }
        msg = msg + "Produtória de " + num1 + ", " + num2 + " vezes é " + produto + ".\n\n";
        break;
      default:
        JOptionPane.showMessageDialog(null, "Opção inválida, cálculos não realizados");
    }

    // saída de resultados
    if (opcao == '1' || opcao == '2') {
      JOptionPane.showMessageDialog(null, msg);
    }

    System.exit(0);
  }
}
