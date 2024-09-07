//A. Data types niya ma'am
let number = 9;
let palindrome = "madam";

//B. Arithmetic and Logical Operators
let product = number * 10;
let Even = (number % 2 === 0);

console.log('Product of ' + number + ' and 10 is: ',product);

//C. Conditional Statements
//i. if else statement
if (Even) {
    console.log(number + ' is even');
} else {
    console.log(number + ' is odd');
}

//ii. switch statement
function Prime(num){
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

switch (Prime(number)) {
    case true:
        console.log(number + ' is a prime number.');
        break;
        case false:
            console.log(number + ' is not a prime number.');
            break;
}

//D. Loops
function kayPalindrome(palindrome) {
    let wow = palindrome.length;
    for (let i = 0; i < wow / 2; i++) {
        if (palindrome[i] !== palindrome[wow - 1 - i]) {
            return false;
        }
    }
    return true;
}

//E. Functional Programming 
function checkNum(num) {
    //i. Determine a number if it is odd or even
    const Even = num % 2 === 0;

    //i. Determine a number if it is prime number or not
    const primeNum = Prime(num);

    //i. Determine a string if it is a palindrome or not
    const palindromeWord = kayPalindrome(palindrome)

    return {
        Even,
        primeNum,
        palindromeWord,
    };
}
const result = checkNum(number);
console.log('The number ' + number + ' is ' + (result.Even ? 'even' : 'odd') + '.');
console.log('The number ' + number + ' is ' + (result.primeNum ? 'prime' : 'not prime') + '.');
console.log('The word ' + palindrome + ' is ' + (result.palindromeWord ? 'a palindrome' : 'not a palindrome') + '.');