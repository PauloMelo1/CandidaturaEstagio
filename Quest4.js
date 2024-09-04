let SP = 67836.43
let RJ = 36678.66
let MG = 29229.88
let ES = 27165.48
let outros = 19849.53

let Total = SP + RJ + MG + ES + outros
let ShareSP = SP / Total
let ShareRJ = RJ / Total
let ShareMG = MG / Total
let ShareES = ES / Total
let Shareoutros = outros / Total   

console.log(`O estado de São Paulo representou ${ShareSP*100}% do valor total das vendas`)
console.log(`O estado do Rio de Janeiro representou ${ShareRJ*100}% do valor total das vendas`)
console.log(`O estado de Minas Gerais representou ${ShareMG*100}% do valor total das vendas`)
console.log(`O estado de Espirito Santo representou ${ShareES*100}% do valor total das vendas`)
console.log(`Os demais estados representaram em somatório ${Shareoutros*100}% do valor total das vendas`)