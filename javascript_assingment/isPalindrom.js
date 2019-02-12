"use strict";
let isPalindrom=function (){
    let str=prompt("enter the string");

    let rev_str=str.split('').reverse().join('');
    alert( rev_str==str);  
       
      
    }