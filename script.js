const main = document.getElementById('main');
const nomesDiscos = ["yellow", "red", "green", "blue"]

/**Função para criar os pinos dinamicamente com o DOM */

function criarPinos(){
    for(let i = 0; i < 3; i++){
        let pino = document.createElement('ul');
        pino.className = 'pino';
        pino.id = `pino${i+1}`;
        main.appendChild(pino);
    }
}
criarPinos();

const torres = document.getElementsByClassName("pino")

//função que cria os discos no primeiro pino
function criarTorres(){
    for (let i=0; i<4; i++){
        let criarDisco = document.createElement("li")
        criarDisco.innerText = `Disco ${i+1}`;
        criarDisco.classList.add(nomesDiscos[i])
        criarDisco.classList.add("disco")
        criarDisco.id = `disco${i+1}`;
        torres[0].appendChild(criarDisco)
    }
}
criarTorres()

//função que seleciona o disco da torre clicada

function pegarDisco(event){
    let torreAtual = event.currentTarget
    let discoAtual = torreAtual.lastElementChild
    return discoAtual
}

//função que seleciona a torre clicada
function pegarTorre(event){
    let torreAtual = event.currentTarget
    return torreAtual
}

//variáveis que representam o pino atual e o disco atual
let torre = null;
let disco = null;

//Função que movimenta os discos entre os pinos
function moverDiscos(){
    for (let i=0; i<torres.length; i++){
        let tower = torres[i]
        tower.addEventListener("click", function(e){
            torre = pegarTorre(e)
            let temFilho = torre.childElementCount
            
            if(temFilho>0 && disco === null){
                disco = pegarDisco(e)
                disco.classList.add("selecionado")
            }
            else if(temFilho>0){
                let filho = pegarDisco(e)
                let tamanhoDiscoAtual = disco.clientWidth
                let tamanhoFilhoAtual = filho.clientWidth
                if(tamanhoDiscoAtual<tamanhoFilhoAtual){
                    torre.appendChild(disco)
                    contarJogadas()
                    disco.classList.remove("selecionado")
                    disco = null
                    torre = null
                }
                else {
                    disco.classList.remove("selecionado")
                    disco = null
                    torre = null
                }
            }
            else if(disco!==null){
                torre.appendChild(disco)
                contarJogadas()
                disco.classList.remove("selecionado")
                disco = null
                torre = null
            }
            
            //console.log(tower.childElementCount);
            
            if(i > 0 && tower.childElementCount == 4){
                document.getElementById('result').innerText = 'Parabéns, você venceu! Clique em resetar jogo para jogar novamente!'
                
            }
        })

    }
}

moverDiscos();

//função que conta os movimentos
let secaoContador = document.getElementById("contador")
let num = 0

function contarJogadas(){
    num = num+1
    secaoContador.innerText = `Você fez ${num} jogadas`
}

//função que reseta o jogo
const botaoReset = document.getElementById("reset")
const allDisks = document.getElementsByClassName("disco")

function resetarTorre(){
    document.getElementById('result').innerText = ""
    for(let i=0; i<allDisks.length; i++){
        let actualDisk = `disco${i+1}`
        let idAtual = document.getElementById(actualDisk)
        torres[0].appendChild(idAtual)
    }
    secaoContador.innerText = ""
    num=0
    disco.classList.remove("selecionado")
    disco=""
    torre=""
}

botaoReset.addEventListener("click", resetarTorre)
