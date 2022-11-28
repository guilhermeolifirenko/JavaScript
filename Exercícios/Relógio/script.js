function carregar() {
    var msg = document.getElementById('msg')
    var txt = document.getElementById('txt')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        img.src = '../../Imagens/manha.png'
        txt.innerHTML = 'Bom Dia!'
        document.body.style.background = '#5f1d20'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../../Imagens/tarde.png'
        txt.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#b15628'
    } else {
        img.src = '../../Imagens/noite.png'
        txt.innerHTML = 'Boa Noite!'
        document.body.style.background = '#034366'
    }
}