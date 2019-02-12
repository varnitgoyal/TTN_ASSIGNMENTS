"use strict";

//B part 

Employees.filter( employee=>employee.salary > 5000);


//C part

let groupByAge=Employees.map(employee=>{
    let emp=new Object();
    if(employee.age in emp){
        emp[employee.age].push(employee);
    }
    else{
        let arr=new Array();
        arr.push(employee);
        emp[employee.age]=arr;
    }
   return emp;
})

Employees.forEach(employee=>{
    let emp=new Object();
    if(employee.age  in emp){
      console.log("inside if loop");
      emp[employee.age].push(employee);
  }
  else{
      let arr=new Array();
      arr.push(employee);
      emp[String(employee.age)]=arr;
  }
 
})

//d par
Employees.map(employee => {
    if (employee.salary<1000) { 
        employee.salary=employee.salary*5 } 
        return employee
    
    });




