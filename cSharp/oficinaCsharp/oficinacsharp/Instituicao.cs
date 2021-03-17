using System;
using System.Collections.Generic;
using System.Text;

namespace oficinacsharp
{
    class Instituicao : Marca, IInstituicao
    {
        public int CodigoInstituicao { get; set; }
        public string Reitor { get; set; }

        public void retornaCodigoMarca()
        {
            Console.WriteLine("Código: " + Codigo);
        }

        public void setarValorCodigoMarca(int codigo)
        {
            Codigo = codigo;
        }
    }
}
