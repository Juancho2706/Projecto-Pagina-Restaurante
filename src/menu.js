import { $maindiv } from "./esqueleto"
import sushi2 from './assets/images/sushi2.jpg'
import sushi3 from './assets/images/sushi3.jpg'
import sushi4 from './assets/images/sushi4.jpg'

const imagenesmenu = {
    '0': sushi2,
    '1': sushi3,
    '2': sushi4
};

function colocarinfo(dish,lugar,string1,string2,string3){
    dish.className = 'dish'
    const imagendish1 = document.createElement('img')
    imagendish1.src = imagenesmenu[lugar]
const pa = document.createElement('p')
    pa.innerText = string1
const pb = document.createElement('p')
    pb.innerHTML = string2
const button = document.createElement('button')
    button.innerText = string3
    button.classList.add('button-30')
    dish.append(imagendish1)
    dish.append(pa)
    dish.append(pb)
    dish.append(button)
}


function menu(){
    $maindiv.className = 'mainmenu'
    $maindiv.innerHTML = ''
    //div1
    const titulo = document.createElement('h3')
        titulo.innerText = 'FabSushi'
    const p = document.createElement('p')
        p.innerText = 'Aprobado por Obama'
    const div1 = document.createElement('div')
    div1.append(titulo)
    div1.append(p)
    $maindiv.append(div1)
    //div2
    const dish1 = document.createElement('div')
        let string1 = 'Tempura Kardashian'
        let string2 = 'Con pescado alimentado de<br>puras hierdas del olimpo.'
        let string3 = '200$'
        colocarinfo(dish1,0,string1,string2,string3)
    const dish2 = document.createElement('div')
        string1 = 'Sushi Sifrino'
        string2 = 'Hecho exclusivamente en<br>Valencia, para sifrinos.'
        string3 = '300$'
        colocarinfo(dish2,1,string1,string2,string3)
    const dish3 = document.createElement('div')
        string1 = 'Roll 50K'
        string2 = 'Cada molecula de este roll es<br>hecho con oro real.'
        string3 = '666$'
        colocarinfo(dish3,2,string1,string2,string3)
    const div2 = document.createElement('div')
        div2.className = 'dishes'
    div2.append(dish1)
    div2.append(dish2)
    div2.append(dish3)
    $maindiv.append(div2)
}

export {menu}