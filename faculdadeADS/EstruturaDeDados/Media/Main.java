import javax.swing.*;

class Main {
  public static void main(String[] args) {
    int i, Num[], media, soma = 0;
    Num = new int[50];

    for (i = 0; i <= 4; i++) {
      Num[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite um número"));
      soma = soma + Num[i];
    }

    media = soma / 50;

    System.out.println("A média das 50 notas digitadas é: " + media);
  }
}