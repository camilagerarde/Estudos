import java.util.List;

public class Aula {
  private Professor professor;
  private List<Aluno> alunos;

  public Aula(Professor professor, List<Aluno> alunos) {
    this.professor = professor;
    this.alunos = alunos;
  }

  public void Avaliar() {
    for (Aluno aluno : this.alunos) {
      System.out.println("Professor " + this.professor.nome + " " + this.professor.sobrenome + " avalia " + aluno.nome
          + " " + aluno.sobrenome + " sobre " + this.professor.disciplina + ".");
    }
  }
}