
import javax.swing.*;

class ProgVetor {
  public static void soma() {
    int resultado = 0, valores[] = { 1, 2, 3, 4, 5 };

    for (int i = 0; i < valores.length; i++) {
      resultado = resultado + valores[i];
    }

    JOptionPane.showMessageDialog(null, "A somatória é " + resultado);
  }

  public static int produto() {
    int resultado = 1, valores[] = { 1, 2, 3, 4, 5 };

    for (int i = 0; i < valores.length; i++) {
      resultado = resultado * valores[i];
    }

    return resultado;
  }

  public static void main(String entrada[]) {
    int resultadoProduto;

    soma();
    resultadoProduto = produto();

    JOptionPane.showMessageDialog(null, "A produtória é " + resultadoProduto);

    System.exit(0);
  }
}
