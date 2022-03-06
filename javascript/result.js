contador = Number(localStorage.getItem('contador'))
var passos
var todos = []

function recuperar(){
    var mostrou = localStorage.getItem(`mostrou`)
    if(mostrou.toLowerCase() == 'false'){
        for(var cont = 0; cont < contador; cont++){
            todos[cont] = JSON.parse(localStorage.getItem(`celula${cont}`))
            passos = JSON.parse(localStorage.getItem('passos'))
            tabela = document.getElementById('tabela')
            var novaLinha = document.createElement('tr')
            novaLinha.innerHTML = `<td>${todos[cont].posOrganização+1} - ${todos[cont].conteudo}</td><button onclick="eliminar(${todos[cont].posOrganização})">&#10006</button>`
            var maisUmaLinha = document.createElement('tr')
            maisUmaLinha.innerHTML = `<ul>`
            juntos(todos[cont].posOrganização, maisUmaLinha)
            var novaCelula = tabela.appendChild(novaLinha)
            var segundaCelula = tabela.appendChild(maisUmaLinha)
            localStorage.setItem(`mostrou`, true)
        }
    }
}

function juntos(passoDoAtual, lista){
    for(var passear = 0; passear < passos.length ; passear++){
        if(passos[passear].passo == passoDoAtual){
            if(passos[passear].motivo == ''){
                lista.innerHTML += `<li>Vá para o passo ${passos[passear].avança_para +1}<button onclick="eliminarPasso(${passos[passear].passo}, ${passos[passear].avança_para})">&#10006</button></li>`
            }else{
                lista.innerHTML += `<li>${passos[passear].motivo}, vá para o passo ${passos[passear].avança_para +1}<button onclick="eliminarPasso(${passos[passear].passo}, ${passos[passear].avança_para})">&#10006<button></li>`
            }
        }
    }

    lista.innerHTML += '</ul>'
}

function eliminarPasso(passo, avanço){
    passos = JSON.parse(localStorage.getItem('passos'))
    for(var varrer in passos){
        if(passo == passos[varrer].passo && avanço == passos[varrer].avança_para){
            passos.splice(varrer,1)
        }
    }
    localStorage.setItem('passos', JSON.stringify(passos))
    localStorage.setItem('mostrou', false)
    document.location.reload()
}

function eliminar(pos){
    cont = 0
    while(cont != todos.length){
        if(todos[cont].posOrganização == pos){
            localStorage.setItem('mostrou', false) 
            localStorage.setItem('contador', todos.length-1)
            var keys = []
            keys = Object.keys(localStorage)
            for(var item in keys){
                string = keys[item]
                if(Number(string.charAt(6)) == pos){
                    localStorage.removeItem(keys[item])
                    localStorage.setItem('mostrou', false)
                }
            }
        }
        cont++
    }
}

function limpatudo(){
    localStorage.clear()
    document.location.reload()
}