//Q1:Write a JavaScript function that returns array elements larger than a number
// let arr = [12,3,4,55,6,11,5,14];
// let n = prompt("Enter the number");
// function getElementAfterN(arr,n){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] > n){
//             console.log(arr[i]);
//         }
//     }
// }
// getElementAfterN(arr,n);

//Q2:Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function uniqueString(str){

    for(let i =0; i<str.length; i++)
    {
        let char = str[i];
        if(temp.indexOf(char) == -1)
        {
            temp = temp + char ;
        }  
    }
    console.log(temp);
}
    


let str = "abcdabcdefgggh";
let temp = "";    
uniqueString(str);