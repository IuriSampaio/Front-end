//arrumando a url
const baseURL = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token='
const token = 'c71554dcee999c8feeb0210e183ebdbeb154318f'

const url = baseURL+token

// função assincrona para trabalhar com os dados da api
const pegaDados = async() =>{
    
    const api = await fetch(url)
    const json = await api.json();
    
    //guardando a cifra de cêsar na constante
    const cifra = json.cifrado
    
    //guardando o numero de casas
    const numeroDeCasas = json.numero_casas

   // document.write(`<div>Crifra de César a ser decodificada: <b> ${cifra}</b> <br>` )
    //document.write(` Numero de casas puladas em relação ao alfabeto original: ${numeroDeCasas}</div>`)
    return cifra, numeroDeCasas

}

// const decifra = ( cifra, numeroDeCasas ) =>{
    
//    // string(cifra).toLowerCase();

//     let letraP;
//     const codLetra = "a".charCodeAt()
//     let tamanhoAlafabeto = 26

//     letraP = 

//     document.writeln(letraP)


 
// }




//( letraEmASC - cod1Letra + numeroDeCasas ) % tamanhoAlafabeto + codLetra

// var cipher = ( text, deslocamento ) => {
	
// 	var result = "";
	
//     const primeiroASC = 'a'.charCodeAt(0);
//     const ultimoASC ='z'.charCodeAt(0)
// 	const tamanhoAlafabeto = ( ultimoASC - primeiroASC);
    

// 	for ( var i = 0; i < text.length; i++ ) {

//         var letraEmASC= text[i].charCodeAt(0);
        
      //  if( letraEmASC < ultimoASC & letraEmASC > primeiroASC ){
           
//             var LetralfabetoNormal= letraEmASC - primeiroASC;
//             var letraCodificada = (LetralfabetoNormal + deslocamento) % tamanhoAlafabeto;
            
//             var novaLetra = String.fromCharCode( primeiroASC + letraCodificada );
            
//             result += novaLetra;
        


// 	}
	
// 	return result;
// }





// var decipher = ( text, deslocamento ) => {
	
// 	return cipher( text, deslocamento * -1);
// }


pegaDados()



var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");





function calculate(cifra,numeroDeCasas) {
    var text = cifra.toLowerCase();
    var result = "";
    const primeiroASC = 'a'.charCodeAt(0);
    const ultimoASC ='z'.charCodeAt(0);
    
 	for ( var i = 0; i < text.length; i++ ) {

        var letraEmASC= text[i].charCodeAt(0);
        if( letraEmASC < ultimoASC & letraEmASC > primeiroASC ){
       
            var posicaoDaLetraNoAlfabeto = letraEmASC-primeiroASC; //Identifica qual letra é do alfabeto
            var letraComDeslocamento = (posicaoDaLetraNoAlfabeto +numeroDeCasas) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
            letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
            result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
                
        }else{
            result += text[i];
        }
        console.log(result)
    }
    
    //document.getElementById("output").value = result;
}