import { $header,$maindiv } from "./esqueleto";
import { menu } from "./menu";
import imagebase from './assets/images/sushi1.jpg'

function home(){
    $maindiv.className = 'mainhome'
    $maindiv.innerHTML = ''
    //div 1
    const div1 = document.createElement('div')
        div1.classList.add('div1')
    const h1 = document.createElement('h1')
        h1.innerText = 'FabSushi'
    const p = document.createElement('p')
        p.innerHTML = 'Nuestros productos son 100%<br>veganos, vegetarianos y fabulosos,<br>toda nuestra carta aprobada por<br>Nicky Minaj en persona.'
    const button = document.createElement('button')
        button.innerText = 'Ver Menu'
        button.classList.add('button-30')
    button.addEventListener('click', (e)=>{
        menu()
    })
    div1.append(h1)
    div1.append(p)
    div1.append(button)
    $maindiv.append(div1)

    //div 2
    const div2 = document.createElement('div')
        div2.classList.add('div2')
    const imagenhome = new Image()
    imagenhome.src = imagebase
    imagenhome.classList.add('imagenhome')
    div2.append(imagenhome)
    $maindiv.append(div2)
}

export {home}