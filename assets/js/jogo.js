  
  var altura = 0
  var largura = 0
  var vidas = 1
  var tempo = 10
  var nivel = window.location.search
  var criaMosquitoTempo = 1500
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel === 'muitoDificil' ){
    criaMosquitoTempo = 750
}

  
  function ajustaTamanhoJogo(){ 
     altura = window.innerHeight
     largura = window.innerWidth
     console.log(largura, altura)
   }

   ajustaTamanhoJogo()
   var cronometro = setInterval( function(){
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    }
    else{
    document.getElementById('cronometro').innerHTML = tempo
    }
   }, 1000)

function posicaorandom(){
//remover mosquito anterior caso exista
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    if (vidas > 3){
        window.location.href = 'fimDeJogo.html'
    } else 
    document.getElementById('v' + vidas).src = "./assets/img/coracao_vazio.png"
    vidas ++
}
var posicaox = Math.floor(Math.random() * largura) - 90
var posicaoy = Math.floor(Math.random() * altura) - 90
 
posicaox = posicaox < 0 ? 0 :posicaox
posicaoy = posicaoy < 0 ? 0 :posicaoy
console.log(posicaox, posicaoy)

//criar o elemento html
var mosquito = document.createElement('img')
mosquito.src = './assets/img/mosca.png'
mosquito.className= tamandoRamdom() + ' ' +ladoAleatoro()
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'
mosquito.id='mosquito'
mosquito.onclick= function(){
    this.remove('Elemento clicado')
}

document.body.appendChild(mosquito)

}   

function tamandoRamdom(){
    var classe = Math.floor( Math.random() * 3)

    switch(classe) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatoro() {
    var classe = Math.floor( Math.random() * 2)

    switch(classe){
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
        case 2:
           
    }
}