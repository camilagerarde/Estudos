using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contaDoFulano = new ContaCorrente();
            contaDoFulano.titular = "Fulano";

            ContaCorrente contaDoBeltrano = new ContaCorrente();
            contaDoBeltrano.titular = "Beltrano";

            bool resultadoSaque = contaDoFulano.Sacar(10);
            Console.WriteLine("Saldo do " + contaDoBeltrano.titular + ": " + contaDoBeltrano.saldo);
            Console.WriteLine("Saldo do " + contaDoFulano.titular + " depois do saque de $10: " + contaDoFulano.saldo);
            Console.WriteLine("Resultado do saque: " + resultadoSaque);

            contaDoFulano.Depositar(100);
            Console.WriteLine("Saldo de " + contaDoFulano.titular + " depois do depósito de $100: " + contaDoFulano.saldo);

            contaDoFulano.Transferir(30, contaDoBeltrano);
            Console.WriteLine("Saldo de " + contaDoFulano.titular + " depois da transferência para Beltrano de $30: " + contaDoFulano.saldo);
            Console.WriteLine("Saldo do " + contaDoBeltrano.titular + " depois de receber a transferência: " + contaDoBeltrano.saldo);

            Console.ReadLine();

        }
    }
}
