function palindrome(kata) {
    var re = /[\W_]/g;
    var lowRegStr = kata.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if(reverseStr === lowRegStr) {
        return true;
    } else {
        return false;
    }
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false