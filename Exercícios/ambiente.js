let num = [3, 18, 6, 12, 15, 9]
// Push adiciona um valor na última chave
num.push(21)
// Sort escreve em ordem crescente
// num.sort()
console.log(`O valor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let position = num.indexOf(4)
if (position == -1) {
    console.log (`O valor não foi encontrado`)
} else {
    console.log (`O valor está na posição ${position}`)
}