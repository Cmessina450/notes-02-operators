/* All Programming languages come with a set of operators. The following are basic math operators. */

/* This is eh addition and subtraction operators at work. */
var addOne = 38;
var addTwo = 12;
var addFinal = addOne + addTwo;

document.write('<br>' + addFinal);

var subOne = 89;
var subTwo = 43;
var subFinal = subOne - subTwo;

document.write('<br>' + subFinal);

/* This is the multiplication and division operators at work. */

var multiplyOne = 2;
var multiplyTwo = 2;
var multiplyFinal = multiplyOne * multiplyTwo;

document.write('<br>' + multiplyFinal);

var divOne = 49;
var divTwo = 7;
var divFinal = divOne / divTwo;

document.write('<br>' + divFinal);

/* Modulus, also know n as 'Remainder' in Javascript, is a math operator that returns or gives you the remainder of a division operator. Modulus is often used to determine if a set of numbers is equal to something. */

var modOne = 16;
var modTwo = 5;
var modFinal = modOne % modTwo;

document.write('<br>' + modFinal)

var modThree = 9;
var modFour = 5;
var modExact= modThree % modFour;

document.write('<br>' + modExact)

/* In programming languages, you should never divide by zero. This will result in an error, that can often times break your program and sometimes even crash your browser or your computer. */

/* Incrementers and Decrementers are used to add one or subtract one from a value. These are most often used in loops. */
var incA =3;
document.write('<br>Staring Number: ' + incA);
incA++; /* Adds one to incA */
document.write('<br>Incremented: ' + incA);

/* The incrementer is replacing += 1. Which adds 1 to the abovevariable. */

var decA = 6;
document.write('<br>Starting Number ' + decA);
decA--; //Subtract one from decA
document.write('<br>Decremented ' + decA);

/* teh decrementer is replacing -= 1. Which subtracts 1 from the above varaiable. */

/* The most commonly used operator in programming, is the assignment operator. It is denoted with an equal sign (=). The assignment operator assigns a value to an object. */
var assignThis = 'This string is assigned to the assignThis variable';
document.write('<br> ' + assignThis);

/* Advanced Operators or Logic Operators are used to test for logic in your programs. These operators are interested in evaluating something to either true or false. */

/* The == operator is teh comparison operator. It determerines if two pieces of data share teh same value. */
var a = 4;
var b = 4;
if (a == b) {
	//Do Something.
	document.write('<br>They\'re Equal!');
}

/* The === operator is teh strict or absolute comparison operator. It determines if two pieces of data share the same value and type. */
var c = '78';
var d = '78';
if (c === d) {
	//Do Something.
	document.write('<br> The variables are equal in type as well as value');
}

/* The != and the !== operators are used to deteremine if two values are NOT equal. != only evaluates the value. !== evaluates the value and the type. */
var e = 'Happy';
var f = 'Sad';
if ( e != f) {
	// Do something.
	document.write('<br> These values are not the same.');
}


var g = 8;
var h = '11';

if (g !== h) {
	//Do something.
	document.write('<br> These values ar ABSOLUTELY not the same');
}

/* Less than (<) and greater than (>) operators. These test to determine if one value is less than or greater than the other. */
var i = 3;
var j = 9;
if (i > j){
	document.write('<br> i is less than j');
}

/* The less than or equal to (<=) amd greater than or equal to (>=) p[eratprs are a;sp ised tp determine values. This time, they take into considerator if the values are equal to one another. */
var k = 89;
var l = 56;
if (k >= l){
	document.write('<br> the k value is greater than or equal to l');
}

/* The && 'and' operator ties two elements together. */
var m = 45;
var n = 45;
var o = 45;
if (m == n && m == o) {
	document.write('<br> m is equal to both n and o.');
}

/* The || 'or' operator compares two elements two eachother. It accdepts a true evaluation if one or the other is not false. */
var p = 89;
var q = 77;
var r = 89;
if (p == q || p == r) {
	document.write('<br> p is either equal to q or equal to r');
}

/* Prompt() is a Javascript method run on the Window Object that asks a suer for input. */
var yourName = prompt('Please enter your name', 'ex. John Smith');


/* The code below evaluates if the user inputs 'James Bond' into the yourName vaiable. IF the ydo, the 007 is welcomed. If they don't put in 'James Bond', then the code greets them by name. */
if (yourName == 'James Bond') {
	document.write('<br>Welcome, 007');
} else {
	document.write('<br> Oh, hello ' + yourName + '.')
}


/* In class assignment */
var yourNumber = prompt('Please Enter your Number from 1-100, ex. 50');

if (yourNumber >= 50) {
	document.write('<br> You Passed!');
} else {
	document.write('<br> You Fail at Life');
}
	












