var a = 2
var b= 1
var a_1 = --a 
var b_1 = --b
var b_2 = ++b 
var b_3 = b--
var res_1 = a_1         // --a
var res_2 = a_1 - b_1   // --a - --b
var res_3 = res_2 + b_2 // --a --b + ++b
var res_4 = res_3 + b_3 // --a - --b + ++b +b 
document.write ("a is " + a +'<br/>');

document.write ("b is " + b + '<br/>');

document.write ("Result is "+ res_4 + '<br/>');