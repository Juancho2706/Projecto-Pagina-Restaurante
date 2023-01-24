import {$div1,$div2,$header,$lacaja} from './esqueleto.js'
import sushi1 from './assets/images/sushi1.jpg'

function pagina1(){
    const p1 = document.createElement('h1');
    p1.innerText = 'Fresh Food with Great Taste';
    $div1.append(p1);
    const img1 = document.createElement('img');
    img1.src = sushi1;
    img1.classList.add('imagetitulo')
    $div1.append(img1);
    $div1.classList.add('div1');
    $lacaja.appendChild($div1);

    const p2 = document.createElement('p');
    p2.innerHTML = 'We try to keep as <font color="orange">Fresh & Healthy</font> as <br>possible by using <font color="orange">Local, seasonal Ingredients.</font> <br>At the same time, we avoid to use artificial <br>ingredients and food additives during <br>cooking process.'
    $div2.classList.add('div2');
    $div2.append(p2);
    const p3 = document.createElement('p');
    p3.innerHTML = 'We Create Delicious Sushi<br>Combination for You'
    $div2.append(p3);
    $lacaja.appendChild($div2);
}

export {pagina1};