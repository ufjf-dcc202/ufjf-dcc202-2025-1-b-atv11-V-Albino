import { getLista, limpaLista, adicionaNaLista, removeDaLista} from "./lista.js";




const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const btnRemover = document.querySelector("#remover")

btnLimpar.addEventListener('click', limparItensDeLista)
btnAdicionar.addEventListener('click', adicionaItensNaLista)
btnRemover.addEventListener('click', removeItenDaLista)


function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

function adicionaItensNaLista(){
    adicionaNaLista(pEntrada.textContent);
    atualizarLista();
}

function removeItenDaLista(){
    removeDaLista(Number(pEntrada.textContent));
    atualizarLista();
}

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}