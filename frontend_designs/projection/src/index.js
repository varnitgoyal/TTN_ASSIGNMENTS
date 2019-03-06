import './styles/reset.css';
import './styles/font-awesome.css';

import {main} from './scripts/main.js';
import './styles/sass/main.scss';
import pic1 from './assets/images/pic01.jpg';
import pic2 from './assets/images/pic02.jpg';

let pic1Ele=document.getElementById("pic1");
let pic2Ele=document.getElementById("pic2");

pic1Ele.src=pic1;
pic2Ele.src=pic2;
function component() {
  let element = document.createElement('div');

  
  element.innerHTML ="hello world";
  element.classList.add('hello');
 
  main();	

  return element;
}

//document.body.appendChild(component());
