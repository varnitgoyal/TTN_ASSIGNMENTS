"use strict";
let ObjectCopy=function(){
    let obj1=prompt("enter the object");
    let copyObj={};
    for(let prop in obj1){
        console.log(obj1[prop]);
        copyObj[prop]=obj1[prop];


    }
   
    alert(copyObj);
}