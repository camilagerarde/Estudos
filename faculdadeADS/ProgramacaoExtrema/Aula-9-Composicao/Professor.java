public class Professor {
  public String nome;
  public String sobrenome;
  public String disciplina;

  public Professor(String nome, String sobrenome, String disciplina) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.disciplina = disciplina;
  }

  public void explicar() {
    System.out.println(this.sobrenome + " explicando sobre " + this.disciplina + "...");
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

  public String getDisciplina() {
    return disciplina;
  }

  public void setDisciplina(String disciplina) {
    this.disciplina = disciplina;
  }
}