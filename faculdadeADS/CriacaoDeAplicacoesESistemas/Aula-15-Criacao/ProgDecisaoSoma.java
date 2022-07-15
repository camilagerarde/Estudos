import javax.swing.*;

class ProgDecisaoSoma {
  public static void main(String entrada[]) {
    int num1, num2, soma = 0;
    char op = '0';
    String msg = "", msgEntrada = "Digite 1 para adição\nDigite 2 para somatoria\n";

    // entrada de dados
    num1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro"));
    num2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro"));
    op = (JOptionPane.showInputDialog(msgEntrada)).charAt(0);

    // processamento
    switch (op) {
      case '1': {
        if (num1 % 2 == 0 && num2 % 2 == 0) {
          soma = num1 + num2;
          msg = msg + "Soma de " + num1 + " por " + num2 + " = " + soma + ".\n\n";
        } else {
          msg = msg + "Adição feita somente com números pares.\n\n";
        }
        break;
      }
      case '2':
        for (int i = 1; i <= num2; i = i + 1) {
          soma = soma + num1;
        }
        msg = msg + "Somatória de " + num1 + ", " + num2 + " vezes é " + soma + ".\n\n";
        break;
      default:
        JOptionPane.showMessageDialog(null, "Opção inválida, cálculos não realizados");
    }

    // saída de resultados
    if (op >= '1' && op <= '3') {
      JOptionPane.showMessageDialog(null, msg);
    }

    System.exit(0);
  }
}
