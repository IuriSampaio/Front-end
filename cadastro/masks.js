"use strict";

///OBJ COM MASCARAS USADAS NOS INPUTS 
const masks = {
                            // APAGA OQUE FOR DIFERENTE DE LETRAS, ESPAÇO, LETRAS MAIUSCULAS E LETRAS COM ACENTO
    text        : value => value.replace(/[^a-zA-Z À-ÿ]/,''),

                            //APAGA OQUE FOR DIFERENTE DE NUMEROS DE 0 Á 9
    celular     : value => value.replace (/[^0-9]/g, '')
                                // ORGANIZA DA FORMA (11) 91111-1111
                                .replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3')
                                // APAGA TUDO QUE TENHA MAIS DE 17 CARACTERES
                                .replace(/(.{17})(.*)/, '$1' ),
                                
                            // APAGA OQUE FOR DIFERENTE DE NUMEROS DE 0 Á 9
    cep         : value => value.replace(/[^0-9]/g,'')
                                // ORGANIZA DA FORMA 11111 - 111
                                .replace(/(.{5})(.{3})/,'$1 - $2')
                                // APAGA TUDO QUE SEJÁ MAIOR DOQUE OS 11 CARACTERES
                                .replace(/(.{11})(.*)/,'$1'),

                            
    numero      : value => value.replace(/[^0-9]/g,'')
                                //COLOCA UM nº ANTES DO NUMERO QUE VAI SER DIGITADO
                                .replace(/(.*)/,'nº $1'),
                              
}

// EXPORTANDO PARA CADASTRO.JS FUNÇÃO QUE VALIDA OS INPUTS DE ACORDO COM AS MASCARAS NO OBJ ANTERIOR
export const validaTudo = element => {
    element.addEventListener('input', ( event ) => {
        // pegando o input q foi digitado
        const $input = event.target;
        // pegando o tipo de mascara especificado no 'data-type' do HTML
        const typeMask = $input.dataset.type;
        //SE existir nas mascaras criadas (masks) alguma propriedade com o 
        //nome equivalente no 'data-type' do elemento que se foi digitado no HTML
        if (masks.hasOwnProperty(typeMask)) {
            // atribuindo ao valor digitado no input a função especificada no 
            // elemento do obj equivalente ao tipo de mascara especificado no 'data-type'
            $input.value = masks[typeMask]($input.value);    
        }
        
    })
}

// EXPORTANDO FUNÇÃO QUE VALIDA O EMAIL, SE NÃO TIVER O '@' E O '.' ELE MANDA VERIFICAR O EMAIL
export const validaEmail = element => {
    element.addEventListener('blur', () => {
        // SE o valor do elemento NÃO tiver algumacoisa@algumacoisa.algumacoisa
        if (!element.value.match (/.*@.*\..*/)){
            alert ("verifique o e-mail!")
        }
    })
}