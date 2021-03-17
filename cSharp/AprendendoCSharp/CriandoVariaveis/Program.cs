using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CriandoVariaveis
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto - Criando Variáveis");
            Console.WriteLine();

            int numeroInteiro;
            numeroInteiro = 36;
            int comSoma = numeroInteiro + 10;
            Console.WriteLine("Variável de valor númerico inteiro (int) = " + numeroInteiro + ". Com operação soma " + comSoma + ".");
            Console.WriteLine();

            double numeroDecimal;
            numeroDecimal = 1200.70;
            double comDivisao = numeroDecimal / 2;
            Console.WriteLine("Variável de valor decimal (double) = " + numeroDecimal + ". Com uma divisão " + comDivisao + ".");
            Console.WriteLine();

            double vDouble = 2.5;
            int vInt = (int)vDouble;
            Console.WriteLine("Convertendo variáveis (double -> int) = " + vDouble + " -> " + vInt + ".");
            Console.WriteLine();

            int bitsInt = 1300000000;
            Console.WriteLine("Variável (int) é do tipo 32bits = " + bitsInt + ".");
            long bitsLong = 130000000000000;
            Console.WriteLine("Variável (long) é do tipo 64bits = " + bitsLong + ".");
            short bitsShort = 15000;
            Console.WriteLine("Variável (short) é do tipo 16bits = " + bitsShort + ".");
            Console.WriteLine();

            float Vfloat = 2.5f;
            Console.WriteLine("Variável do tipo (float) também suporta casas decimais, mas com menor precisão = " + Vfloat + ".");
            Console.WriteLine();

            char letra = 'a';
            Console.WriteLine("Variável de Caractere (char) = " + letra + ".");
            letra = (char)65;
            Console.WriteLine("A variável (char) pode utilizar números referentes ao seu códigoASC = " + letra + ".");
            letra = (char)(letra + 1);
            Console.WriteLine("E a manipulação com operações, como a soma = " + letra + ".");
            Console.WriteLine();

            string texto = "Variável de texto (string)";
            Console.WriteLine(texto);
            texto = "Se colocar números juntos sem aspas converte eles para tipo string " + 123;
            Console.WriteLine(texto);
            string lista = @"Se colocar um @ antes das aspas do valor declarado e pular linhas, esses espaços são considerados strings
- Primeiro item
- Segundo item
- Terceiro item";
            Console.WriteLine(lista);
            Console.WriteLine();

            Console.WriteLine("Execução finalizada, tecle ENTER para sair...");
            Console.ReadLine();
        }
    }
}
