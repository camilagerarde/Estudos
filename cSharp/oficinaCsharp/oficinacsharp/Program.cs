using System;

namespace oficinacsharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Instituicao instituicao1 = new Instituicao();

            instituicao1.Nome = "São Judas";
            instituicao1.setarValorCodigoMarca(30);

            instituicao1.exibirNomeMarca();
            instituicao1.retornaCodigoMarca();
        }
    }
}
