import './style.css';
import giticon from './assets/images/github.png'
import { home } from './home';
import { menu } from './menu';
import { contacto } from './contacto';

const $base = document.querySelector('body')
const $header = document.createElement('div')
$header.classList.add('header')
const $maindiv = document.createElement('div')
const $footer = document.createElement('div')
$footer.classList.add('footer')


function generaresqueleto(){
    const homeheader = document.createElement('button')
        homeheader.innerText = 'Home'
        homeheader.addEventListener('click', (e)=>{
            home()
        })
    const menuheader = document.createElement('button')
        menuheader.innerText = 'Menu'
        menuheader.addEventListener('click', (e)=>{
            menu()
        })
    const contactoheader = document.createElement('button')
        contactoheader.innerText = 'Contacto'
        contactoheader.addEventListener('click', (e)=>{
            contacto()
        })
    $header.append(homeheader)
    $header.append(menuheader)
    $header.append(contactoheader)
    $base.append($header)
    $base.append($maindiv)
    const p = document.createElement('p')
        p.innerHTML = "Hecho con amor por Juancho2706 <a href='https://github.com/Juancho2706'><img src="+giticon+"></a>"
    $footer.append(p)
    $base.append($footer)
}

export {generaresqueleto,$base,$footer,$maindiv,$header}