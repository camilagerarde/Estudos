import java.util.ArrayList;
import java.util.List;

class Main {
  public static void main(String[] args) {
    Aluno aluno1 = new Aluno("Harry", "Potter");
    Aluno aluno2 = new Aluno("Hermione", "Granger");

    List<Aluno> alunos = new ArrayList<Aluno>();
    alunos.add(aluno1);
    alunos.add(aluno2);

    aluno1.fazerPergunta("Poções");

    Professor professor = new Professor("Severo", "Snape", "Poções");

    professor.explicar();

    Aula aula = new Aula(professor, alunos);

    aula.Avaliar();
  }
}