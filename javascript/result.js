contador = Number(localStorage.getItem('contador'))
todos = []

function recuperar(){
    var mostrou = localStorage.getItem(`mostrou`)
    if(mostrou.toLowerCase() == 'false'){
        for(var cont = 0; cont < contador; cont++){
            todos[cont] = JSON.parse(localStorage.getItem(`celula${cont}`))
            tabela = document.getElementById('tabela')
            novaLinha = document.createElement('tr')
            novaLinha.innerHTML = `<td>${todos[cont].conteudo}</td><button onclick="eliminar(${todos[cont].posOrganização})">&#10006</button>`
            novaCelula = tabela.appendChild(novaLinha)
            localStorage.setItem(`mostrou`, true)
        }
    }
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