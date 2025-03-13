let DATA = "Secret Information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =  ", DATA);
    }

}

class student extends User{
    constructor(name,email){
        super(name,email);
    }
}

class Admin extends User{
    editData(){
        DATA = "some new data";
        console.log(DATA);
    }
}

let studM = new student("Mukhtiar","mukh@gmail.com");
let studY = new student("yasir","yasi@gmail.com");

let teachI = new User("irfan","irfan@gmail.com");
let teachZ = new User("zartasha","zartasha@gmail.com");

let admin1 = new Admin();