var orgCels = {conteudo: '', posCriação: 0, posOrganização: 0}
var pass = []

function change(typeOfIdentfier, identifier){
    recebe = document.querySelector(`${typeOfIdentfier}#${identifier}`)
    recebe.innerHTML = ''
}

function returnto(identificador){
    recebe = document.getElementById(identificador)
    recebe.innerHTML = '<li>Preencha a caixa de texto a direita;</li><li>Adicione à lista de passos logo abaixo (Clicando no botão "Adicionar");</li><li>Selecione o método de sorteio do passo a passo logo abaixo;</li><li>Por fim, faça o download do arquivo em PDF, CSV ou DOCX.</li>'
}

function limpar() {
    area = document.querySelector('textarea#dado')
    area.innerHTML = ''
    document.querySelector('button#botao').style.display = 'inline-block'
}

function add(){
    var dado = document.getElementById('dado')
    var cont = Number(localStorage.getItem('contador'))
    orgCels.conteudo = dado.value
    orgCels.posCriação = cont
    orgCels.posOrganização = orgCels.posCriação
    var newObj = JSON.parse(JSON.stringify(orgCels))
    cont++
    var mostrado = false
    salvar(cont, JSON.stringify(newObj), mostrado)
}

function salvar(contador, celulas, mostr){
    localStorage.setItem(`contador`, contador)
    localStorage.setItem(`celula${contador-1}`, celulas)
    localStorage.setItem(`mostrou`, mostr)
}

function newpasso(){
    var passo = Number(document.getElementById('numPasso'))-1
    var avan = Number(document.getElementById('addPasso'))-1
    var motiv = document.getElementById('motiv')
    var avanco = {'passo': passo, 'avança_para':avan, 'motivo':motiv} 
    var copyAvanco = JSON.parse(JSON.stringify(avanco))
    var pos = pass.length

    pass[pos] = copyAvanco

    localStorage.setItem('passos', JSON.stringify(pass))
}