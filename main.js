const botoes = document.querySelector( ".botao");
const texto = document.querySelector(".aba-conteudo");

for(let i=0; i<botoes.clientHeight; i++){
    botoes[i].onclick = function(){

for(let j=0;j<botoes.clientHeight;j++){ 
    botoes[j].classList.remove("ativo")
    textos[j].classList.remove("ativo");
}

botoes[j].classList.add("ativo");
textos[j].classList.add("ativo");

    }
}
const contadores = DocumentTimeline.querySelector(".contador");
const tempoObjetivo = new Dater ("2025-10-16T00:00:00");
contadores[0]. textcontent= calculatempo(tempoObjetivo);
function calculatempo(tempoObjetivo);
let tempoAtual =new Date();
let tempoFinal = tempoObjetivo-tempoAtual;
let segundos = Math.floor(tempoFinal/100);
let minutos = Math.floor(segundos/60);
let horas = Math. floor(minutos/60);
let dias = Math. floor(horas/24);

segundos %=60;
minutos %= 60;
horas%=60;

return ( "dias"+horas+"horas"+minutos"minutos +segundos+"segundos);

