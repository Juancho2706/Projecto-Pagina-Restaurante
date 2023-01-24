import twt from './assets/images/twt.png'
import fb from './assets/images/fb.png'
import ig from './assets/images/ig.png'
import './style.css';

const infoheader = {
    '0': 'Home',
    '1': 'Menu',
    '2': 'Our services',
    '3': 'About',
    '4': 'DaiSushi',
    '5': ig,
    '6': fb,
    '7': twt,
    '8': 'Make an Order'
}

const $lacaja = document.querySelector('body');
const $header = document.createElement('div');
$header.classList.add('header');
const $div1 = document.createElement('div')
const $div2 = document.createElement('div')

function generaresqueleto() {
for (let index = 0; index < 9; index++) {
    if(index <= 3){
        let p = document.createElement('button');
        p.innerText = infoheader[index];
        p.classList.add('boton');
        $header.appendChild(p);
    }if(index == 4){
        let p = document.createElement('p')
        p.innerText = infoheader[index]
        p.setAttribute('id', 'titulo')
        $header.appendChild(p);
    }else if(index >= 5 && index <= 7){
        let p = document.createElement('img');
        let a = document.createElement('a');
        a.href = '#';
        p.src = infoheader[index]
        p.classList.add('iconoheader');
        a.appendChild(p);
        $header.appendChild(a);
    }else if(index == 8){
        let p = document.createElement('button');
        p.innerText = infoheader[index];
        p.classList.add('boton');
        $header.appendChild(p);
    }
}
$lacaja.appendChild($header);
}
// $lacaja.appendChild($div1);
// $lacaja.appendChild($div2);

export {generaresqueleto}
export {$div1,$div2,$header,$lacaja};