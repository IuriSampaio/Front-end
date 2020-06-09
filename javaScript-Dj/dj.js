//########################### A PARTIR DAQUI É PRA TOCAR SE CLICAR NA DIV #################################### 
const viraSom = (i , som) =>{
    let el = document.getElementById(`${i}`)
    let som2 = document.getElementById(`${som}`)
        el.addEventListener('click', ()=>{
        som2.play()
    })
}
 viraSom('a','boom')
 viraSom('s','clap')
 viraSom('d','tom')
 viraSom('f','tink')
 viraSom('g','hihat')
 viraSom('h','kick')
 viraSom('j','openhat')
 viraSom('k','snare')
 viraSom('l','ride')
//########################### A PARTIR DAQUI É PRA TOCAR A TECLA CLICADA ####################################
let tocaSom = (som) =>{
    let som2 = document.getElementById(`${som}`)
    som2.play()
}
const verificaQualFoi = (strMin) =>{
    if(strMin == 'a'){strMin.addEventListener('keypress',tocaSom('boom'))}
    else if(strMin == 's'){strMin.addEventListener('keypress',tocaSom('clap'))}
    else if(strMin == 'd'){strMin.addEventListener('keypress',tocaSom('tom'))}
    else if(strMin == 'f'){strMin.addEventListener('keypress',tocaSom('tink'))}
    else if(strMin == 'g'){strMin.addEventListener('keypress',tocaSom('hihat'))}
    else if(strMin == 'h'){strMin.addEventListener('keypress',tocaSom('kick'))}
    else if(strMin == 'j'){strMin.addEventListener('keypress',tocaSom('openhat'))}
    else if(strMin == 'k'){strMin.addEventListener('keypress',tocaSom('snare'))}
    else if(strMin == 'l'){strMin.addEventListener('keypress',tocaSom('ride'))}
    else{
        alert('presione uma tecla da fileira do meio ');
    }
}
const teclapresionada = () =>{
    let e = window.event.keyCode
    let str = String.fromCharCode(e)
    let strMin = str.toLowerCase()
    verificaQualFoi(strMin)
}

document.addEventListener('keypress',teclapresionada)
