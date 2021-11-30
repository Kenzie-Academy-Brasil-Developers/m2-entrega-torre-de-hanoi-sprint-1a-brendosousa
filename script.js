const main = document.getElementById('main');

/*const nomesDiscos = ["yellow", "blue", "red", "green"];
const tamanho = [250,200,150,100];*/

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
    for (let i = 0; i < 4; i++){
        let disco = document.createElement("li");
        disco.innerText = `Disco ${i+1}`;
        disco.className = 'disco';
        disco.id = `disco${i+1}`;
        torres[0].appendChild(disco);
    }
}

criarTorres();


// function pegarDisco(event){
//     let torreAtual = event.currentTarget
//     let discoAtual = torreAtual.lastElementChild
//     console.log(torreAtual)
//     console.log(discoAtual)
//     // if(discoAtual!==undefined){
//     //     torreAtual.appendChild(discoAtual)
//     // }
//     return discoAtual
// }
// function soltarDisco(event){
//     let torreAtual = event.currentTarget
//     let discoPraSoltar = ""
//     torreAtual.appendChild(discoPraSoltar)
// }

// torre.addEventListener("click", function(e){
//     let disco = pegarDisco(e)
//     return disco
// })

// torre2.addEventListener("click", function(e){
//     let disco = pegarDisco(e)
//     return disco
// })
