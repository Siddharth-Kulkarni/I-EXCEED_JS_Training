let str="hi";
console.log(str.length);


let str1="helllo_ world";
let str2=str1.toUpperCase();

function disp(){
console.log(str2);

//Extracting Parts

console.log(str2.slice(0,8));

console.log(str2.substring(0,8));

console.log(str1.slice(7));


//Searching 


console.log(str2.indexOf("HELLLO"));

console.log(str2.indexOf("_"));

console.log(str2.lastIndexOf("L"));


console.log(str1.includes("_"));


console.log(str1.startsWith("hell"));

console.log(str1.endsWith("_"));



//Replacing


console.log(str1.replace("world","everyone"));

console.log(str1);


console.log("7 7 7".replace(/7/g,"18"));


//Trimming spaces

console.log("   hi   ".trim());
console.log("   hi   s".trimStart());
console.log("   hi   ".trimEnd());

//Padding

//It will add the given character or anything at the start 
//till the length of the string becomes to the given num ,here it is 15
console.log(str1.padStart(15,"S"));  

//here it will add at the end

console.log(str1.padEnd(15,"S"));

let arr="hi_hello_hey,world,hola";
console.log(arr.split("_"));
}


console.log(str1.charAt(6));

console.log(str1[1]);

console.log((" "+str1).repeat(2).trim());








