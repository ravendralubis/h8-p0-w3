function palindrome(kata) {
    for(var i = 0; i < kata.length; i++) {
        for(var j = kata.length-1; j >= 0; j--) {
            if(kata[i] === kata[j]) {
                return true
            } else {
                return false
            }
        }
    }
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false