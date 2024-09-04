const dadosJson = require('./dados.json')

//MENOR VALOR DE FATURAMENTO DO MÊS ACIMA DE R$0,00
let menorValorFat = 999999999
dadosJson.forEach(salvarNumMenor)
function salvarNumMenor (a) {
    if (a.valor > 0 && a.valor < menorValorFat) {
        menorValorFat = a.valor
    }
}
console.log(`O menor valor faturado esse mês node dias onde houve faturamento foi ${menorValorFat}!`)

//MAIOR VALOR DE FATURAMENTO DO MÊS
let maiorValorFat = 0
dadosJson.forEach(salvarNumMaior)
function salvarNumMaior (a) {
    if (a.valor > maiorValorFat) {
        maiorValorFat = a.valor
    }
}
console.log(`O maior valor faturado esse mês foi ${maiorValorFat}!`)

//MÉDIA MENSAL DESCONSIDERANDO DIAS SEM FATURAMENTO
let fatMensal = []
dadosJson.forEach(salvarFat)
function salvarFat (a) {
    if (a.valor > 0) {
        fatMensal.push(a.valor)
    }
}
console.log(fatMensal)