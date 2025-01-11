//  Template Literals! And String Interpolation(${exp})
let obj = {
    item : 'pen',
    price : '10rs',
};

console.log("The cost of " , obj.item , " is " , obj.price);
console.log(`The cost of ${obj.item} is ${obj.price}`);

// the length of escape character \t is 1 not 2!
let str = "Yasir\tBurfat";
console.log(str.length); //=> 12 not 13

//methods are in camel case

//Strings are immutable!
let str1 = "Yasir Burfat";
str1.toUpperCase(); //it changed copy of string!
console.log(str1);  //Prints original string!

//we create newString for appy change.
let newString = str1.toUpperCase();
console.log(newString);

//trim removes whitespaces from start and end!

//slice returns part of string with ending value is exclusive!
let str3 = "0123456";
console.log(str3.slice(1,3)); //gives only 12

//replace func replaces search value to new value!
//relace can change the string without creating newstring.
let st = "Kamjigalh";
console.log(st.replace("ji","G"));  //KamGgalh


//charAt returns char at a index!
for(let i = str1.length-1;i>=0;i--){
    console.log(str1.charAt(i)); //both works the same!
    //console.log(str1[i]);
}

//Prac Que, Generate Username like yasirburfat => @yasirburfat11
//with @ and name length in last
let fullname = prompt("Enter Your Fullname!");
let username = `@${fullname}${fullname.length}` ;
console.log(username);
