namespace ByteBank.Funcionarios
{
    public abstract class Funcionario
    {
        public static int TotalDeFuncionarios { get; private set; }
        public string Nome { get; set; }
        public string CPF { get; private set; }

        public double Salario { get; protected set; }

        public abstract double GetBonificacao();
        public abstract void AumentarSalario();

        public Funcionario(string nome, string cpf, double salario)
        {
            TotalDeFuncionarios++;
            Nome = nome;
            CPF = cpf;
            Salario = salario;
        }
    }
}
