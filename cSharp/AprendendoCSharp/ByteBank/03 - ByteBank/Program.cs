using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            Cliente fulano = new Cliente();
            fulano.nome = "Fulano";
            fulano.profissao = "dev";
            fulano.cpf = "123.456.789-10";

            ContaCorrente contaDoFulano = new ContaCorrente();
            contaDoFulano.titular = fulano;
            contaDoFulano.agencia = 123;
            contaDoFulano.conta = 12345;
            contaDoFulano.saldo = 500;

            Console.WriteLine(contaDoFulano.titular.nome);
            Console.WriteLine(fulano.nome);

            contaDoFulano.titular.nome = "Fulano Silva";

            Console.WriteLine(contaDoFulano.titular.nome);
            Console.WriteLine(fulano.nome);

            Console.WriteLine();

            ContaCorrente contaDoBeltrano = new ContaCorrente();

            contaDoBeltrano.titular = new Cliente();

            contaDoBeltrano.titular.nome = "Beltrano";
            contaDoBeltrano.titular.profissao = "QA";
            contaDoBeltrano.saldo = 2000;

            Console.ReadLine();
        }
    }
}
