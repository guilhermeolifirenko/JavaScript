function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var result = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', 'homem.png')
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            img.setAttribute('src', 'mulher.png')
        }

        result.style.textAlign = 'center'
        result.innerHTML = `Resultado: ${genero} com ${idade} anos.`
        result.appendChild(img)
    }
}