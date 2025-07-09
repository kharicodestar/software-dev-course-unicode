let string = "Code";
let firstCodePoint = string.charCodeAt(1);
let thirdCodePoint = string.charCodeAt(3);

console.log(`The Unicode code point for '${string}' is ${firstCodePoint}.`);
console.log(`The Unicode code point for '${string}' is ${thirdCodePoint}.`);


let codes = [72, 101, 108, 108];
let wordFromCodePoints = String.fromCharCode(codes[0]) + 
String.fromCharCode(codes[1]) + 
String.fromCharCode(codes[2]) + 
String.fromCharCode(codes[3]);

console.log(wordFromCodePoints);


let newString = "Launch";
console.log(newString.charCodeAt(0));
console.log(newString.charCodeAt(1));
console.log(newString.charCodeAt(2));
console.log(newString.charCodeAt(3));
console.log(newString.charCodeAt(4));
console.log(newString.charCodeAt(5));


let newcodes = [76, 97, 117, 110, 99, 104]
letswappedString = String.fromCharCode(newcodes[104])+
String.fromCharCode(newcodes[97])+
String.fromCharCode(newcodes[117])+
String.fromCharCode(newcodes[110])+
String.fromCharCode(newcodes[99])+
String.fromCharCode(newcodes[76]);
console.log(letswappedString);