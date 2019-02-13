"use strict";

//B part 
let filterBySalary=function(){
console.log(Employees.filter( employee=>employee.salary > 5000));

}
//C part

let groupByAge=function(){
    let emp=new Object();

Employees.map(employee=>{
   
    if(employee.age in emp){
        emp[employee.age].push(employee);
    }
    else{
        let arr=new Array();
        arr.push(employee);
        emp[employee.age]=arr;
    }
   return emp;
});
console.log(emp);
};


//d par
let mapEmployees=function(){
console.log(Employees.map(employee => {
    if (employee.salary<1000 && employee.age>20) { 
        employee.salary=employee.salary+employee.salary*5 } 
        return employee
    
    }));


}


