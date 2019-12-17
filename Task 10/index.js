document.write ('<h2>value after the variable declaration is undefine</h2>' )
var val = "??" ;
document.write("value after daclaration variable is " + val + '<br/>'); 
val = 5;
document.write (" initial Value is " + val + '<br/>');
var increament =  ++val ;
document.write ("value after increament is " + increament + '<br/>');
val = val + 7
document.write("value after addition is " + val + '<br/>');
var decreament = --val ;
document.write("value after decreament is " + decreament + '<br/>');
val= val % 3;
document.write(" The reminder is " + val );