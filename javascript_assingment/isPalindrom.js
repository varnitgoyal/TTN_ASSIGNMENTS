"use strict";
let isPalindrom=function (str){

    let rev_str=str.split('').reverse().join('');
    return rev_str==str;  
       
      
    }