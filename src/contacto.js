import { $maindiv } from "./esqueleto"
import mapa from "./assets/images/mapa.png"
import igicon from "./assets/images/igicon.png"
import whatsicon from "./assets/images/whatsicon.png"
import firma from "./assets/images/signature.png"

function contacto(){
    $maindiv.className = 'maincontacto'
    $maindiv.innerHTML = ''
     //div1
    const titulo = document.createElement('h3')
    titulo.innerText = 'FabSushi'
    const p = document.createElement('p')
    p.innerText = 'Aprobado por Obama'
    const div1 = document.createElement('div')
    div1.append(titulo)
    div1.append(p)
    div1.className = 'divtitulo'
    $maindiv.append(div1)
    //div2a
    const imgmapa = new Image()
    imgmapa.src = mapa
    const p1 = document.createElement('p')
    p1.innerHTML = '<img src=' + igicon + '> @lascarajitassushi'
    const p2 = document.createElement('p')
    p2.innerHTML = '<img src=' + whatsicon + '> +58 241 8675869'
    const div2a = document.createElement('div')
    div2a.append(imgmapa)
    div2a.append(p1)
    div2a.append(p2)
    //div2b
    const parrafo = document.createElement('p')
    parrafo.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    const firmaimg = new Image()
    firmaimg.src = firma
    firmaimg.className = 'signature'
    const div2b = document.createElement('div')
    div2b.append(parrafo)
    div2b.append(firmaimg)
    //union
    const uniondiv = document.createElement('div')
    uniondiv.append(div2a)
    uniondiv.append(div2b)
    uniondiv.className = 'uniondiv'
    $maindiv.append(uniondiv)
}

export {contacto}