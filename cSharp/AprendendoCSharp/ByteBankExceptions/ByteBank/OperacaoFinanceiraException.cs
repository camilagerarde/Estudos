using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    public class OperacaoFinanceiraException : Exception
    {
        public OperacaoFinanceiraException()
        {
        
        }
        public OperacaoFinanceiraException(string mensagem) 
            : base(mensagem)
        {

        }
        public OperacaoFinanceiraException(String mensagem, Exception excecaoInterna)
            :base(mensagem, excecaoInterna)
        {

        }
    }
}
