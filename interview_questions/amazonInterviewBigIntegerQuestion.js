// Int64.max =  256 // 16 characters long

// 12345567890123456

// 9999
// 9999
// listA => [99,99]
// listB => [99,99]

//          999999999999999, 9999
// 65535 => [5, 6553]
// 75646 => [6, 7564]

// 89999999999999999999999999999999999999999... => [89999999, 99999999, 9999999, ...]
// listA => [9999999999, 99999999, ..., 999999]
// listB => [9999999999, 99999999, ..., 999999]
// returns a list that follows the same format as the input
var addLargeNumbers = function(listA, listB) {
    var result = [],
        addResult,
        carryOver = false,
        bVal;
    
    listA.forEach(function(aVal, idx) {
      if (listB[idx] !== null) {
        bVal = listB[idx];
      } else {
        bVal = 0;
      }

      addResult = aVal + bVal;
      
      if (carryOver) {
        addResult += 1;
        carryOver = false;
      }
       
      var addResultString = addResult.toString();
      if (addResultString.length > 15) {
        carryOver = true;
        addResult = Integer.parse(addResultString.splice(1, addResultString.length), 10);
      }
         
      result.push(addResult); // [98, 10] 
    });   
    
    if (carryOver) {
      result.push(1); 
    }
    
    return result;
};