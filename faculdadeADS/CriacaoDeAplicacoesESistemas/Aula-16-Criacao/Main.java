import javax.swing.*;

class Main {
  public static void soma(int[] valores) {
    int resultado = 0;

    for (int i = 0; i < valores.length; i++) {
      resultado = resultado + valores[i];
    }

    JOptionPane.showMessageDialog(null, "A somatória é " + resultado);
  }

  public static int produto(int[] valores) {
    int resultado = 1;

    for (int i = 0; i < valores.length; i++) {
      resultado = resultado * valores[i];
    }

    return resultado;
  }

  public static void main(String entrada[]) {
    int resultadoProduto, valores[] = { 1, 2, 3, 4, 5 };

    soma(valores);
    resultadoProduto = produto(valores);
    JOptionPane.showMessageDialog(null, "A produtória é " + resultadoProduto);

    System.exit(0);
  }
}