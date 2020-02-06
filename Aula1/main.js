//                             JAVA SCRIPT
//                        NAO PRESCISA USAR --> ;
//                          CONCATENAÇÃO --> ,
//          ****************TIPOS DE VARIAVEIS***************
//cont --->escopo da variavel e seu bloco 
    //nao vai funcionar pois o alert esta fora do bloco
      /*  if(true){
            const nome="iuri"
        }
        alert(nome) */
    //vai funcionar pq ta no mesmo bloco
      /*  if(true){
            const nome ="iuri"
            alert(nome)
        }   */
//var ---> por função ou global
    //nao vai funcionar pq ta fora da função 
        /*function msg(){
            if(true){
                nome="iuri"//se nao declarar a variavel, vai ser tratada como ******var*******
            }
        }
        alert(nome)//poderia fazer alert(msg()) AI vai funcionar  */
    //vai funcionar pq ta na mesma função
        /*function msg(){
            if(true){
                var nome="iuri"//se nao declarar a variavel, vai ser tratada como ******var*******
            }
            alert(nome)//alert nome vai fazer parte função
        }*/
//let ---> escopo da variavel é seru bloco
         //nao vai funcionar pois o alert esta fora do bloco
       /*  if(true){
            let nome="iuri"
        }
        alert(nome) */
    //vai funcionar pq ta no mesmo bloco
    /*if(true){
            let nome ="iuri"
            alert(nome)
        }   */
//          *****************NOMES DE VARIAVEIS****************
//  **SÓ PODEM INICIAR COM LETRAS OU $ OU _
//  **CAMELCASE,NOMES SIGNIFICATIVOS, NÃO USE PALAVRAS RESERVADAS

//          ******************CONSOLE**************
//variavel String
/*  const nome="iuri";
//variavel int
    const idade=12;
//variavel boolean
    const teste=true;
//variavel array
    const produto ={produto:"mouse", quantidade:"45"};
//operações matematicas 
    const somar= ()=>3+3;
//exibir as variaveis const no console do google
        console.log( typeof (nome) );
        console.log( typeof (idade) );
        console.log( typeof (teste) );
        console.log( typeof (produto) );
        console.log( typeof (somar) );

    const cidade = "osasco"
    const estado = 'São paulo'
    const pais = `brasil ${estado}`//para incrimentar uma variavel a outra variavel : ZZZ = `xxx $[nome da outra variavel]`

        console.log("minha casa é", cidade)
        console.log("Estado", estado)
        console.log("Pais", pais)

    let nota1=10;
        console.log(nota1++)
        console.log(++nota1)
*/
    
    
        const $calcular = document.getElementById('calcular');
    
    //const $nome =document.querySelector("input[type=text]")  --> pode usar qualquer forma de indicar elemento
    function calcularMedia(){
        const $nome = document.getElementById('nome');  // so pelo id
        const $nota1 = document.getElementById('nota1')
        const $nota2 = document.getElementById('nota2');
        const $media = document.getElementById('media');
        const $situacao = document.getElementById('situacao');
            const media = (parseInt($nota1.value) + parseInt($nota2.value)) / 2;
                if(media>=5){
                    $situacao.value = "APROVADO"
                    $situacao.classList.remove('REPROVADO')
                    $situacao.classList.add('APROVADO')
                    $situacao.style.color='green'
                    $situacao.style.backgroundColor='white'
                }else{
                    $situacao.value ="REPROVADO"
                    $situacao.classList.add('REPROVADO')
                    $situacao.classList.remove('APROVADO')
                    $situacao.style.color='red'
                    $situacao.style.backgroundColor='black'
                }
        $media.value = media;
    }
        $calcular.addEventListener('click',calcularMedia);
