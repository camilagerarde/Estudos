using System;
using System.Collections.Generic;
using System.Text;

namespace oficinacsharp
{
    class Marca
    {
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string Cidade { get; set; }

        public void exibirNomeMarca()
        {
            Console.WriteLine("Marca: " + Nome);
        }
    }
}
