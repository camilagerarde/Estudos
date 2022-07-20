class Main {
  public static void main(String[] args) {
    imprimirSequencia(15);
  }

  private static void imprimirSequencia(Integer valor) {
    if(valor == 0) return;

    System.out.println(valor);
    imprimirSequencia(valor - 1);
  }
}