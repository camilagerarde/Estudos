using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Condicionais
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto Condicionais");
            Console.WriteLine();

            int idadeFulano = 26;
            bool acompanhado = true;


            if (idadeFulano >= 18 || acompanhado)
            {
                Console.WriteLine("Fulano pode entrar.");
            }
            else
            {
                Console.WriteLine("Fulado não pode entrar.");
            }

            Console.WriteLine();
            Console.WriteLine();

            double salario = 4000.0;

            if (salario >= 1900.00 && salario <= 2800.00)
            {
                Console.WriteLine("o IR é de 7.5% e pode deduzir na declaração o valor de R$ 142.");
            } 
            else if (salario >= 2800.01 && salario <= 3751.00)
            {
                Console.WriteLine("o IR é de 15% e pode deduzir R$ 350.");
            }
            else if (salario >= 3751.01 && salario <= 4664.00)
            {
                Console.WriteLine("o IR é de 22.5% e pode deduzir R$ 636.");
            }

            Console.WriteLine();
            Console.WriteLine();

            int mes = 10;

            switch (mes)
            {
                case 1:
                    Console.WriteLine("O mês é Janeiro");
                    break;
                case 2:
                    Console.WriteLine("O mês é Fevereiro");
                    break;
                case 3:
                    Console.WriteLine("O mês é Março");
                    break;
                case 4:
                    Console.WriteLine("O mês é Abril");
                    break;
                case 5:
                    Console.WriteLine("O mês é Maio");
                    break;
                case 6:
                    Console.WriteLine("O mês é Junho");
                    break;
                case 7:
                    Console.WriteLine("O mês é Julho");
                    break;
                case 8:
                    Console.WriteLine("O mês é Agosto");
                    break;
                case 9:
                    Console.WriteLine("O mês é Setembro");
                    break;
                case 10:
                    Console.WriteLine("O mês é Outubro");
                    break;
                case 11:
                    Console.WriteLine("O mês é Novembro");
                    break;
                case 12:
                    Console.WriteLine("O mês é Dezembro");
                    break;
                default:
                    Console.WriteLine("Mês inválido");
                    break;
            }

            Console.ReadLine();
        }
    }
}
