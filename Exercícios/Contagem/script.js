function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var result = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('Preencha todos os campos')
        result.innerHTML = 'Impossível contar'
    } else {
        result.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert ('O Passo não pode ser menor que 1.')
            p = 1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                result.innerHTML += ` ${c} \u{270D}`
            }
        } else {
            for (var c = i; c <= f; c -= p) {
                result.innerHTML += ` ${c} \u{270D}`
            }
        }
        result.innerHTML += `\u{1F6A9}`
    }
}