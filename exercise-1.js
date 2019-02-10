function balikString(word) {
    var kata = '';

    for(var i = word.length-1; i >= 0; i--) {
            kata += word[i];
    }
    console.log(kata);
}

balikString('Hello World!');