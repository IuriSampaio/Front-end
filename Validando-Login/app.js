// vai retornar uma lista de objetos que são obrigatorios
const campos = document.querySelectorAll("[required]")

const validaCampo = ( campo ) => {
     // verificando se existe erro
    const verificaErros = () => {
        let achadorDeErro = false
        let validade = campo.validity
        // para cada erro no objeto --> e.target.validity <-- fornecido pelo js toda vez que se faz um submit no form --> console.log(campo.validity)
        for(let error in validade){
            // console.log(error) -> cada indicie do objeto campo.validity

            // se o erro não for no atributo customError do objeto (que sempre é true por default) 
            // e o parametro booleano especificado pela variavel error for true
            if( validade[error] && !validade.valid){ // error != "customError" &&
                // atribuindo ao achador de erro o indicie que é true no objeto percorido
                achadorDeErro = error
            }
        }
        return achadorDeErro
    }
    // ESPECIFICANDO O TIPO DE ERRO MOSTRADO PELA VALIDAÇÃO
    const setMsgLayout = ( type ) => {
        // OBJETO COM OS TIPOS DE CAMPO EXISTENTES 
        // E CADA CAMPO TEM UM OBJETO COM OS ERROS DESSE CAMPO
        const mensagens = {
            text: {
                valueMissing: "PREENCHE ESSA MERDA"
            },
            email: {
                valueMissing: "PREENCHE ESSA MERDA",
                typeMismatch: "PREENCHA UM EMAIL VALIDO"
            }
        }
        // RETORNANDO A MENSAGEM EQUIVALENTE AO TIPO DO CAMPO
        // PASSADO NA FUNÇAO PAI E O TIPO NO ERRO PASSADO AO CHAMAR ESSA FUNÇÃO
        return mensagens[campo.type][type]
    }
    // ATIVANDO O ERRO QUANDO EXISTIR UMA MENSAGEM COMO PARAMETRO DESSA FUNÇÃO
    const setMsgCustomizada = ( msg ) => {
        const spanErro = campo.parentNode.querySelector('span.erro')
        if ( msg ) {
            spanErro.classList.add('active')
            spanErro.innerHTML = msg
        } else{
            spanErro.classList.remove('active')
            spanErro.innerHTML = ""
        }
    }
    // RETONANDO UMA FUNÇÃO QUE CHAMA TODAS AS FEITAS ANTERIORMENTE
    return () => {
        const erro = verificaErros()  
        // SE A FUNÇÃO QUE VERIFICA OS ERROS RETORNAR ALGUMA COISA
        if( erro ){
            // SERA COLOCADO UM TEXTO NA MENSAGEM
            const mensagem = setMsgLayout(erro)
            campo.style.borderColor = "red"
            // E ATIVARA A CLASSE QUE MOSTRA A MENSAGEM RETONANDA PELA FUNÇÃO SETMSGLAYOUT
            setMsgCustomizada(mensagem)
        // SE NÃO O CAMPO ESTA PREENCHIDO CORRETAMENTE
        } else {
            campo.style.borderColor = "green"
            setMsgCustomizada()
        }
    }
}

// função que CUSTOMIZA A MSG QUANDO O CAMPO É REQUIRED E ESTA INVALIDO
const validarFORM = ( e ) => {
    const campo = e.target
    // instanciando o retorno da função verificaErros()
    let validacao = validaCampo(campo)
    // executando função retornada pela função validaCampo()
    validacao()
 ///////////// JEITO FEIO DE FAZER QUE FOI DESMEBRADO NA FUNÇÃO VALIDACAMPO
    // console.log(`erro existe em : ${erro}`)
    // const spanErro = campo.parentNode.querySelector('span.erro')
    // // // SE TEM ERRO
    // if(erro){    
    // //     // TROCANDO MENSAGEM QUE VEM QUANDO O CAMPO É REQUIRED -- NO BUBLE DO NAVGADOR
    // //     campo.setCustomValidity("OBRIGATORIO PORRA")
    //     spanErro.classList.add('active')
    //     if (erro == "typeMismatch"){
    //         spanErro.innerHTML = "Escreva o email da maneira correta"
    //         campo.style.borderColor = "orangered"
    //     }else{
    //         spanErro.innerHTML = "OBRIGATORIO PORRA"
    //         campo.style.borderColor = "red"
    //     } 
    // }else{
    // //     // DEIXANDO SEM MENSAGEM DE ERRO SE FOR VALIDO -- NO BUBLE DO NAVEGADOR
    // //     campo.setCustomValidity("")
    //     spanErro.classList.remove('active')
    //     spanErro.innerHTML = ""
    //     campo.style.borderColor = "green"
    //  }
}

/////////////// DIFERENÇA ENTRE FOR E FOREACH ////////////////////////
// OS DOIS CODIGOS TEM O MESMO RETORNO

//----------------USANDO FOREACH-----------------//
campos.forEach(campo =>{
    campo.addEventListener( 'invalid' , e => {
        // eliminando o buble padrão de erro
        event.preventDefault()
        // chamando a função que verifica se o form é valido
        validarFORM(e) 
    })
    campo.addEventListener( 'blur' , validarFORM )
})

//----------------USANDO FOR--------------------//
// for(campo of campos){
//     campo.addEventListener( 'invalid', validaFORM )
// }


//////////////// QUANDO O FORM FOR SUBMETIDO ///////////////////////
document.querySelector("form")
.addEventListener('submit',()=>{
    // DE UM CONSOLE FALANDO QUE ENVIOU
    console.log('enviando form')
    // E NÃO ENVIE PRA LUGAR NENHUM
    event.preventDefault()
})