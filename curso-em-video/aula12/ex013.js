var agora = new Date() //utilizada para criar um novo objeto de data (data e hora) com base no momento atual
var hora = agora.getHours()
palavraSão = hora > 1? 'são' : 'é'
palavraHora = hora > 1? 'horas' : 'hora'
var horario 
if(hora >= 0 && hora < 6){
     horario = 'Madrugada'
}else if(hora >= 6 && hora < 12){
     horario = 'Manhã'
}else if(hora >= 12 && hora < 18){
     horario = 'Tarde'
}else if(hora >= 18 && hora < 24){
     horario = 'Noite'
}
console.log(`Agora ${palavraSão} ${hora} ${palavraHora} da ${horario}`)