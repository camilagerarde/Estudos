using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LacosDeRepeticao
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto Laços de Repetição");
            Console.WriteLine();
            Console.WriteLine("Controle da Poupança");
            Console.WriteLine();

            double valorInvestido = 1000.0;
            int contadorMes = 1;
            double rendimentoMes = 0.12 / 100;
            double rendimentoAno = rendimentoMes * 12;

            while (contadorMes <= 12)
            {
                valorInvestido += valorInvestido * rendimentoMes;
                Console.WriteLine("Após o " + contadorMes + "º mês investido, você terá R$ " + valorInvestido);
                contadorMes++;
            }

            Console.WriteLine();

            for (int contadorAno = 1; contadorAno <= 5; contadorAno++)
            {
                Console.WriteLine("Após o " + contadorAno + "º ano investido, você terá R$ " + valorInvestido);
                rendimentoAno += 0.0010;
                valorInvestido += valorInvestido * rendimentoAno;
            }

            Console.WriteLine();
            Console.WriteLine("Tabuada");
            Console.WriteLine();

            for (int multiplicador = 1; multiplicador <= 10; multiplicador++)
            {
                for (int contador = 0; contador <= 10; contador++)
                {
                    Console.Write(multiplicador + " * " + contador + " = " + multiplicador * contador);
                    Console.WriteLine();
                }
                Console.WriteLine();
            }

            Console.WriteLine();
            Console.WriteLine("Matriz triangular");
            Console.WriteLine();

            for (int linha = 0; linha < 10; linha++)
            {
                for (int coluna = 0; coluna < linha; coluna++)
                {
                    Console.Write("*");
                }
                Console.WriteLine();
            }

            Console.WriteLine();
            Console.WriteLine("Multiplos de 3");
            Console.WriteLine();

            for (int numero = 1; numero <= 100; numero++)
            {
                if (numero % 3 == 0)
                {
                    Console.WriteLine("O número " + numero + " é um múltiplo de 3!");
                }
            }

            Console.WriteLine();
            Console.WriteLine("Fatorial");
            Console.WriteLine();

            int fatorial = 1;
            for (int i = 1; i <= 10; i++)
            {
                fatorial *= i;
                Console.WriteLine("Fatorial de " + i + " = " + fatorial);
            }

            Console.ReadLine(); 
        }
    }
}
