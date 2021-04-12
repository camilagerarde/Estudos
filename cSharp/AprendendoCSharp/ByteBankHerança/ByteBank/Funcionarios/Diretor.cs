namespace ByteBank.Funcionarios
{
    public class Diretor : FuncionarioAutenticavel
    {
        public Diretor(string nome, string cpf) : base(nome, cpf, 5000)
        { }
        public override double GetBonificacao()
        {
            return Salario * 0.50;
        }

        public override void AumentarSalario()
        {
            Salario *= 1.15;
        }
    }
}
