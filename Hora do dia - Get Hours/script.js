function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto_manha.jpg'
        document.body.style.background = '#62B5F0'
    } else if (hora >=12 && hora <= 18) {
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#1B679D'
    } else {
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#0C2E47'
    }
}