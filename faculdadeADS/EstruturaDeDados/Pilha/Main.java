import javax.swing.*;

class Main {
  public static void main(String arg[]) {
    int tamanhoPilha = 3;
    Pilha intPilha = new Pilha(tamanhoPilha);
    int i;
    int entrada;

    for (i = 1; i <= tamanhoPilha; i++) {
      entrada = Integer.parseInt(JOptionPane.showInputDialog("Digite um valor inteiro"));
      intPilha.Empilhar(entrada);
    }
    intPilha.MostrarPilha();

    // intPilha.ElementoTopo();
    // intPilha.Empilhar(5);
    // intPilha.Empilhar(8);
    // intPilha.Empilhar(4);
    // intPilha.Empilhar(7);
    // intPilha.MostrarPilha();
    // intPilha.Desempilhar();
    // intPilha.Desempilhar();
    // intPilha.ElementoTopo();
    // intPilha.Desempilhar();
    // intPilha.Desempilhar();

    System.exit(0);
  }
}

class Pilha {
  int tamanho;
  int topo;
  int vetor[];

  Pilha(int tam) {
    topo = -1;
    tamanho = tam;
    vetor = new int[tam];
  }

  public boolean PilhaVazia() {
    if (topo == -1) {
      return true;
    } else {
      return false;
    }
  }

  public boolean PilhaCheia() {
    if (topo >= (tamanho - 1)) {
      return true;
    } else {
      return false;
    }
  }

  public void Empilhar(int elemento) {
    if (!PilhaCheia()) {
      topo = topo + 1;
      vetor[topo] = elemento;
    } else {
      System.out.println("Pilha Cheia");
    }
  }

  public int Desempilhar() {
    int desempilhado = 0;

    if (PilhaVazia()) {
      System.out.println("Pilha Vazia");
    } else {
      desempilhado = vetor[topo];
      topo = topo - 1;
    }
    return desempilhado;
  }

  public void ElementoTopo() {
    if (topo >= 0) {
      System.out.println("O elemento do topo é " + vetor[topo]);
    } else {
      System.out.println("Pilha Vazia");
    }
  }

  public void MostrarPilha() {
    int i;

    for (i = topo; i >= 0; i--) {
      System.out.println("Elemento " + vetor[i] + " posição " + (i + 1) + " da Pilha");
    }
  }
}