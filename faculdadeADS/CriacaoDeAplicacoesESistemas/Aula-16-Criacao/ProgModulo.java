import javax.swing.*;

class ProgModulo {
  public static void soma() {
    int n1, n2;

    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro numero inteiro"));

    JOptionPane.showMessageDialog(null, "A soma é " + (n1 + n2));
  }

  public static void subtracao(int x, int y) {
    int result;

    result = x - y;

    JOptionPane.showMessageDialog(null, "A diferença é " + result);
  }

  public static int produto() {
    int n1, n2;

    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro numero inteiro"));

    return (n1 * n2);
  }

  public static double divisao(int x, int y) {
    double result;

    result = (double) x / (double) y;
    return result;
  }

  public static void main(String entrada[]) {
    int n1, n2, s;
    double r;

    soma();

    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro numero inteiro"));

    subtracao(n1, n2);

    s = produto();
    JOptionPane.showMessageDialog(null, "O produto é " + s);

    r = divisao(n1, n2);
    JOptionPane.showMessageDialog(null, "A divisão é " + r);

    System.exit(0);
  }
}
