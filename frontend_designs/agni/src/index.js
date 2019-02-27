import './styles/reset.css';

import './styles/style.css';
import {main} from './scripts/main.js';
import './styles/sass/main.scss';
import logoIcon from './assets/images/logo.png';
import mainVideo from './assets/images/main-video.png';
import munirka from './assets/images/munirka.png';
import ahmed from './assets/images/ahmed.png';
import irshan from './assets/images/irshan.png';
import partner from './assets/images/partner.jpg';

let logo = document.getElementById('logo');
let slide1=document.getElementById("slide1");
let slide2=document.getElementById("slide2");
let slide3=document.getElementById("slide3");
let bigImage=document.getElementById("big__image");

let munirkaEle=document.getElementById("munirka");
let ahmedEle=document.getElementById("ahmed");
let irshanEle=document.getElementById("irshan");



logo.src=logoIcon;
slide1.src=partner;
slide2.src=partner;
slide3.src=partner;
bigImage.src=mainVideo;
munirkaEle.src=munirka;
ahmedEle.src=ahmed;
irshanEle.src=irshan; 


$(document).ready(function(){
$('.flexslider').flexslider({
  animation: "slide",
  
});

});



$(document).ready(function(){
  $(".nested__level__1").hide();

  


  $("#nested_level_2_Item").hover(function(event){
    $(".nested__level__2").fadeToggle();
    event.stopPropagation();
   
   })


$("#nested_level_1_Item").hover (function() {
  $(".nested__level__1").fadeToggle();

})
})









function component() {
  let element = document.createElement('div');

  
  element.innerHTML ="hello world";
  element.classList.add('hello');
 
  main();	

  return element;
}

//document.body.appendChild(component());
