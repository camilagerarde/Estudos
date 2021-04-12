using ByteBank.Funcionarios;
using ByteBank.Sistemas;
using System;

namespace ByteBank
{
    static class Program
    {
        static void Main()
        {
            CalcularBonificacao();
            UsarSistema();

            Console.ReadLine();
        }
        public static void CalcularBonificacao()
        {
            GerenciadorBonificacao gerenciadorBonificacao = new GerenciadorBonificacao();

            Funcionario carlos = new Auxiliar("Carlos", "123.456.789-10");
            Funcionario julia = new Diretor("Julia", "123.456.456-01");
            Funcionario pedro = new Designer("Pedro", "132.465.874-85");
            Funcionario ana = new GerenteDeConta("Ana", "685.984.635-71");
            
            gerenciadorBonificacao.Registrar(carlos);
            gerenciadorBonificacao.Registrar(julia);
            gerenciadorBonificacao.Registrar(pedro);
            gerenciadorBonificacao.Registrar(ana);

            Console.WriteLine("Total bonificações - " + gerenciadorBonificacao.GetTotalBonificacao());
        }
        public static void UsarSistema()
        {
            SistemaInterno sistemaInterno = new SistemaInterno();

            Diretor julia = new Diretor("Julia", "123.456.456-01")
            {
                Senha = "123456"
            };

            GerenteDeConta ana = new GerenteDeConta("Ana", "685.984.635-71")
            {
                Senha = "abc"
            };

            ParceiroComercial parceiro = new ParceiroComercial
            {
                Senha = "123456"
            };

            sistemaInterno.Logar(julia, "123456");
            sistemaInterno.Logar(ana, "123456");
            sistemaInterno.Logar(parceiro, "123456");
        }
    }
}
