using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contaDoFulano = new ContaCorrente();

            contaDoFulano.titular = "Fulano";
            contaDoFulano.agencia = 1001;
            contaDoFulano.conta = 123456;

            ContaCorrente contaDoFulanoSilva = new ContaCorrente();

            contaDoFulanoSilva.titular = "Fulano";
            contaDoFulanoSilva.agencia = 1001;
            contaDoFulanoSilva.conta = 123456;

            Console.WriteLine("Igualdade de tipo Referência: " + (contaDoFulano == contaDoFulanoSilva));

            int idade = 27;
            int idadeRepetida = 27;

            Console.WriteLine("Igualdade de tipo Valor: " + (idade == idadeRepetida));

            contaDoFulano = contaDoFulanoSilva;

            Console.WriteLine("Igualdade de tipo Referência Iguais: " + (contaDoFulano == contaDoFulanoSilva));

            contaDoFulano.saldo = 500;

            Console.WriteLine(contaDoFulano.saldo);
            Console.WriteLine(contaDoFulanoSilva.saldo);

            Console.ReadLine();
        }
    }
}
