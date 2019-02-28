import './styles/reset.css';
import './styles/font-awesome.css';
import './styles/style.css';
import {main} from './scripts/main.js';
import './styles/sass/main.scss';
import banner from './assets/images/banner.jpg';
import imageOne from './assets/images/1.jpg';
import imageTwo from './assets/images/2.jpg';
import imageThree from './assets/images/3.jpg';
import imageFour from './assets/images/4.jpg';
import footerLogo from './assets/images/footer-logo.png'


let bannerEle=document.getElementById("banner");
let imageOneEle=document.getElementById("image_one");
let imageTwoEle=document.getElementById("image_two");
let imageThreeEle=document.getElementById("image_three");
let imageFourEle=document.getElementById("image_four");
let FooterLogoEle=document.getElementById("footer_logo");

bannerEle.src=banner;
imageOneEle.src=imageOne;
imageTwoEle.src=imageTwo;
imageThreeEle.src=imageThree;
imageFourEle.src=imageFour;
FooterLogoEle.src=footerLogo;
function component() {
  let element = document.createElement('div');

  
  element.innerHTML ="hello world";
  element.classList.add('hello');
 
  main();	

  return element;
}

//document.body.appendChild(component());
