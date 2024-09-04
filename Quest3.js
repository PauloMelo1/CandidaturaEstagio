const dadosJson = require('./dados.json')

//MENOR VALOR DE FATURAMENTO DO MÊS ACIMA DE R$0,00
let menorValorFat = 999999999
dadosJson.forEach(salvarNumMenor)
function salvarNumMenor(a) {
    if (a.valor > 0 && a.valor < menorValorFat) {
        menorValorFat = a.valor
    }
}
console.log(`O menor valor faturado esse mês node dias onde houve faturamento foi R$${menorValorFat}!`)





//MAIOR VALOR DE FATURAMENTO DO MÊS
let maiorValorFat = 0
dadosJson.forEach(salvarNumMaior)
function salvarNumMaior(a) {
    if (a.valor > maiorValorFat) {
        maiorValorFat = a.valor
    }
}
console.log(`O maior valor faturado esse mês foi R$${maiorValorFat}!`)







//MÉDIA MENSAL DESCONSIDERANDO DIAS SEM FATURAMENTO
let fatTotalMensal = 0
dadosJson.forEach(salvarFat)
function salvarFat(a) {
    if (a.valor > 0) {
        fatTotalMensal = a.valor + fatTotalMensal
    }
}
let quantidadeDias = 0
dadosJson.forEach(contarDias)
function contarDias(a) {
    if (a.valor > 0) {
        quantidadeDias++
    }
}

let fatMedioMensal = fatTotalMensal / quantidadeDias

let quantidadeDiasMetaBatida = 0
dadosJson.forEach(contarDiasMeta)
function contarDiasMeta(a) {
    if (a.valor > fatMedioMensal) {
        quantidadeDiasMetaBatida++
    }
}
console.log(`Tivemos um total de ${quantidadeDias} dias de vendas!`)
console.log(`O total do faturamento desse mês foi R$${fatTotalMensal}!`)
console.log(`A média de vendas do mês foi de R$${fatMedioMensal} considerando apenas dias com vendas!`)
console.log(`Esse mês batemos meta em ${quantidadeDiasMetaBatida} dias!!!!`)
