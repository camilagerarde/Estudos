using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    public class SaldoInsuficienteException : OperacaoFinanceiraException
    {
        public double Saldo { get; }
        public double ValorSaque { get; }

        /* Construtor sem argumentos */
        public SaldoInsuficienteException()
        {

        }
        public SaldoInsuficienteException(double saldo, double valorSaque) 
            : this($"Valor de R$ {valorSaque} insuficiente para a operação em uma conta com saldo de {saldo}")
        {
            Saldo = saldo;
            ValorSaque = valorSaque;
        }
        public SaldoInsuficienteException(string mensagem) : base(mensagem)
        {
            /* Pode ser feito alguma inicialização que será utilizada no construtor acima */
        }
        public SaldoInsuficienteException(string mensagem, Exception excecaoInterna)
            : base(mensagem, excecaoInterna)
        {
                
        }
    }
}
