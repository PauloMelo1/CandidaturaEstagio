let stringA = "PalavraParaInverter"
let stringB = ""
for (let i = 0; i < stringA.length; i++) {
stringB += (stringA[stringA.length-(i+1)])
}
console.log(stringB)