public class Aluno {
  public String nome;
  public String sobrenome;

  public Aluno(String nome, String sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  public void fazerPergunta(String assunto) {
    System.out.println(this.nome + " perguntando sobre " + assunto + "...");
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getSobrenome() {
    return sobrenome;
  }

  public void setSobrenome(String sobrenome) {
    this.sobrenome = sobrenome;
  }
}