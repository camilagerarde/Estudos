using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente conta = new ContaCorrente(1234, 454545);

            Console.WriteLine(conta.Agencia);
            Console.WriteLine(conta.Conta);

            Console.WriteLine(ContaCorrente.TotalDeContasCriadas);

            ContaCorrente contaDois = new ContaCorrente(1111, 22222);
            Console.WriteLine(ContaCorrente.TotalDeContasCriadas);

            Console.ReadLine();
        }
    }
}
