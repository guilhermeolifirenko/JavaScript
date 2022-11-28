let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let result = document.querySelector('div#result')
let valores = []

function isNumber (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push (Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        result.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert ('Adicione os valores')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let position in valores) {
            soma += valores[position]
            if (valores[position] > maior)
                maior = valores[position]
            if (valores[position] < menor)
                menor = valores[position]
        }
        media = soma / total
        result.innerHTML = `<p>Ao todo temos ${total} números</p>`
        result.innerHTML += `<p>O maior número é ${maior}</p>`
        result.innerHTML += `<p>O menor número é ${menor}</p>`
        result.innerHTML += `<p>A soma dos números deu: ${soma}</p>`
        result.innerHTML += `<p>A média dos números deu: ${media}</p>`
    }
}