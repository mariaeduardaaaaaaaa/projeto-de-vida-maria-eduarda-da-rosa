const botoes = document.querySelector( ".botao");

for(let i=0; i<botoes.clientHeight; i++){
    botoes[i].onclick = function(){

for(let j=0;j<botoes.clientHeight;j++){ 
    botoes[j].classList.remove("ativo")
}

        botoes[i].classList.add("ativo");
    }
}

