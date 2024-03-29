﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    public class ContaCorrente
    {
        public Cliente Titular { get; set; }
        public static int TotalDeContasCriadas { get; private set; }
        public static double TaxaOperacao { get; private set; }
        public int Agencia { get; }
        public int Numero { get; }
        public int ContadorSaqueSemSaldo { get; private set; }
        public int ContadorTransferenciaSemSaldo { get; private set; }

        private double _saldo = 100;

        public double Saldo
        {
            get
            {
                return _saldo;
            }
            set
            {
                if (value < 0)
                {
                    return;
                }

                _saldo = value;
            }
        }
        public ContaCorrente(int agencia, int numero)
        {
            if (agencia <= 0)
            {
                throw new ArgumentException("O argumento agencia deve ser maior que 0.", nameof(agencia));
            }

            if (numero <= 0)
            {
                throw new ArgumentException("O argumento numero deve ser maior que 0.", nameof(numero));
            }

            Agencia = agencia;
            Numero = numero;

            TotalDeContasCriadas++;
            TaxaOperacao = 30 / TotalDeContasCriadas;
        }

        public void Sacar(double valor)
        {
            if (valor < 0)
            {
                throw new ArgumentException("Não é possível sacar valores negativos", nameof(valor));
            }
                if (_saldo < valor)
            {
                ContadorSaqueSemSaldo++;
                throw new SaldoInsuficienteException(Saldo, valor);
            }

            _saldo -= valor;
        }

        public void Depositar(double valor)
        {
            _saldo += valor;
        }


        public void Transferir(double valor, ContaCorrente contaDestino)
        {
            if (valor < 0)
            {
                throw new ArgumentException("Não é possível transferir valores negativos", nameof(valor));
            }

            try
            {
                Sacar(valor);
                contaDestino.Depositar(valor);
            }
            catch (SaldoInsuficienteException ex)
            {
                ContadorTransferenciaSemSaldo++;
                throw new OperacaoFinanceiraException("Operação não realizada", ex);
            }


        }
    }
}
