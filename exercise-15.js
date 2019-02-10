function groupAnimals(animals) {
    var result = []
    var output = []
    for(var i = 0; i < animals.length; i++) {
        result.push(animals[i][0])
    }
    result.sort()
    for(var j = 0; j < result.length; j++) {
        var temp = []
        if(result[j] !== result[j-1]) {
        for(var k = 0; k < animals.length; k++) {
           if(result[j] === animals[k][0]) {
               temp.push(animals[k])
           } 
        }
        output.push(temp)
    }
    }
    return output
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]