var a = document.querySelector('button#animation')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseleave', sair)
a.addEventListener('click', clicar)

function entrar() {
    a.style.background= '#26DBD4'
}
function sair() {
    a.style.background= '#4eebeb'
}
function clicar() {
    a.style.background= '#1FC2BB'
}

var b = document.querySelector('button#button')
b.addEventListener('mouseenter', entrarb)
b.addEventListener('mouseleave', sairb)
b.addEventListener('click', clicarb)

function entrarb() {
    b.style.background= '#ca7b20'
}
function sairb() {
    b.style.background= '#e78d25'
}
function clicarb() {
    b.style.background= '#A9671C'
}

var c = document.querySelector('button#button1')
c.addEventListener('mouseenter', entrarc)
c.addEventListener('mouseleave', sairc)
c.addEventListener('click', clicarc)

function entrarc() {
    c.style.background= '#ca7b20'
}
function sairc() {
    c.style.background= '#e78d25'
}
function clicarc() {
    c.style.background= '#A9671C'
}


