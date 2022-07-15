class Main {
  public static void main(String entrada[])
  {
    // declaração de variáveis
    int NumInt;
    double NumReal, soma;
    char Caracter;

    // entrada de dados
    NumInt = Integer.parseInt(entrada[0]);
    NumReal = Double.parseDouble(entrada[1]);
    Caracter = (entrada[2]).charAt(0);

    // processamento
    soma = (double) NumInt + NumReal;

    // saída de resultados
    System.out.println((double) NumInt + " + " + NumReal + " = " + soma + " Caracter " + Caracter);

    System.exit(0);
  }
}