"use strict";
let ObjectCopy=function(obj1){
    let copyObj={};
    for(let prop in obj1){
        console.log(obj1[prop]);
        copyObj[prop]=obj1[prop];


    }
    return copyObj;


}