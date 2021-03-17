//entradas
let income =parseInt (prompt('Qual o valor das entradas?'));

//saidas
let costs =parseInt (prompt('Qual o valor das saídas?'));

//% de impostos
let taxPercent =parseInt (prompt('Qual o percentual de impostos?'));

//renda bruta
let grossProfit = income-costs;

//valor dos impostos
let tax = grossProfit*taxPercent/100;

//renda líquida
let netIncome = grossProfit-tax;

//visualizando no navegador
document.write ('Sua renda líquida é de $ '+netIncome)
