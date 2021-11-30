/**Função para criar os pinos dinamicamente com o DOM */

let main = document.getElementById('main');

function criarPinos(){
    for(let i = 0; i < 3; i++){
        let pino = document.createElement('ul');
        pino.className = 'pino';
        pino.id = `pino${i+1}`;
        main.appendChild(pino);
    }
}

criarPinos();