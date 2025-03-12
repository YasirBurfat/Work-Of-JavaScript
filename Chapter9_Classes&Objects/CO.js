const employee = {
    calcTax(){
        console.log("Tax = " , this.salary*0.1);
    }
}

const yasir = {
    id : "23cs015",
    salary: 50000,
}
const Amir = {
    id : "23cs101",
    salary: 51000,
}
const mukhtiar = {
    id : "23cs033",
    salary: 52000,
}

yasir.__proto__ = employee;
Amir.__proto__ = employee;
mukhtiar.__proto__ = employee;