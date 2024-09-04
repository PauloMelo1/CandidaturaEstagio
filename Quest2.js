let numero = 986     /*substitua aqui pelo número que desejar para rodar o teste*/

let fiboArray = [0, 1]

while (fiboArray[(fiboArray.length - 1)] < numero) {
    let ultimoDigitFibo = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]
    fiboArray.push(ultimoDigitFibo)
    console.log(`esse é o novo ${fiboArray}`)
}

if (fiboArray.includes(numero)) {
    console.log(`O número ${numero} está na sequencia de Fibonacci!!`)
} else {

    console.log(`O número ${numero} não está na sequencia de Fibonacci!!`)
}