using System;

namespace Revisao
{
  class Program
  {
    static void Main(string[] args)
    {
      Student[] students = new Student[5];
      var indexStudent = 0;
      string userOption = getUserOption();

      while (userOption.ToUpper() != "X")
      {
        switch (userOption)
        {
           case "1":
            Console.WriteLine("Informe o nome do aluno:");
            Student student = new Student();
            student.Name = Console.ReadLine();

            Console.WriteLine("Informe a nota do aluno:");
            if (decimal.TryParse(Console.ReadLine(), out decimal score)) {
              student.Score = score;
            } else {
              throw new ArgumentException("Valor inserido deve ser decimal");
            }
            
            students[indexStudent] = student;
            indexStudent++;
            break;

          case "2":
            foreach (var a in students) {
              if (!string.IsNullOrEmpty(a.Name)) {
                Console.WriteLine($"Aluno: {a.Name} - Nota {a.Score}");
              }
            }
            break;

          case "3":
            decimal totalScore = 0;
            var totalStudents = 0;

            for (int i=0; i < students.Length; i++) {
              if (!string.IsNullOrEmpty(students[i].Name)) {
                totalScore = totalScore + students[i].Score;
                totalStudents++;
              }
            }
            
            var scoreAverage = totalScore / totalStudents;
            Conceito conceitoGeral;

            if (scoreAverage < 3){
              conceitoGeral = Conceito.D;
            } else if (scoreAverage < 5 ) {
              conceitoGeral = Conceito.C;
            } else if (scoreAverage < 8 ) {
              conceitoGeral = Conceito.B;
            } else {
              conceitoGeral = Conceito.A;
            }

            Console.WriteLine($"Média geral {scoreAverage} - Conceito {conceitoGeral}");
            break;

          default:
            throw new ArgumentOutOfRangeException();
        }
          userOption = getUserOption();
      }
    }

    private static string getUserOption()
    {
      Console.WriteLine();
      Console.WriteLine("Informe a opção desejada:");
      Console.WriteLine("1 - Para inserir novo aluno");
      Console.WriteLine("2 - Para listar alunos");
      Console.WriteLine("3 - Para calcular média geral e conceito");
      Console.WriteLine("X - Para sair");
      Console.WriteLine();

      string userOption = Console.ReadLine();
      Console.WriteLine();
      return userOption;
    }
  }
}
