//criar o prompt para perguntar a idade
let ageInYears = parseInt (prompt ("Quantos anos você tem?"))


//converter a idade em segundos
let ageInSeconds= ageInYears*365*24*60*60

//mostrar o resultado no corpo do site
document.write ("Você sabia que sua idade de " + ageInYears + " anos, equivale a " + ageInSeconds + " segundos.")
