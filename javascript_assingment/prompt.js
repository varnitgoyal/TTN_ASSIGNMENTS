"use strict";
let calculateSimpleInterest=function(){


let amount=prompt("enter the amount");
let interestRate=prompt("enter interest rate");
let noOfYears=prompt("no of years");
let simpleInterest=(amount*interestRate*noOfYears)/100;
alert(simpleInterest);
}
