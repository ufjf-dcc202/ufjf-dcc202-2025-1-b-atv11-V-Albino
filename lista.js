const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionaNaLista(textoItem){
    console.log(textoItem);
    lista.push(textoItem);
}

export function removeDaLista(posicao){ 
    // se posicao == 1(querendo apagar o primeiro item), ele remove o lista[1](segundo item).
    // Se o parametro fosse (posicao-1), ele removeria o lista[0]
    if(posicao >= 0 && posicao <= lista.length-1){
        lista.splice(posicao, 1);
    }
}