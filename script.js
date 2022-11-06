function teste() {
    var carro = ['celta', 'palio', 'gol']
    var marca = ['GM', 'Fiat', 'Volks']
    var valor = [15000, 18000, 20000]
    var isel = document.getElementById('isel')
    var sel = String(isel.value)        
    var visual = document.getElementById('ivisual')
    visual.innerHTML = marca[carro.indexOf(sel)]
    var preco = document.getElementById('ipreco')
    preco.innerHTML = `R$${valor[carro.indexOf(sel)]}`
}

function mudar() {
    var lista = ['Roginaldo', 'Janaina', 'Bianca']
    var parente = ['pai', 'mae', 'filha']
    var idade = [37, 31, 8]
    var inome = document.getElementById('inome')
    var nome = String(inome.value)        
    var rel = document.getElementById('iparente')
    rel.innerHTML = parente[lista.indexOf(nome)]
    var anos = document.getElementById('iidade')
    anos.innerHTML = idade[lista.indexOf(nome)]
}