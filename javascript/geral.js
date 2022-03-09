function showbutton(){
    let button = document.getElementById('menushowbt')
    
    button.style.marginLeft = '41.2%'
    button.style.marginTop = '20%'
    button.style.background = 'none'
    button.setAttribute('value', 'Início')
    button.style.color = 'white'
}

function closebutton(){
    let button = document.getElementById('menushowbt')

    button.style.marginLeft = '0'
    button.style.marginTop = '0'
    button.style.background = '#ffbd59'
    button.setAttribute('value', '')
}