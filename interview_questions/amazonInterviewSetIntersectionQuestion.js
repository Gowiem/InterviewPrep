//Given 2 arrays, return back the same elements found in both arrays.

// listA => [1, 2, 3, 5]
// listB => [5, 3, 7, 9]
// returns [5, 3]

// [], [] => []
// [1, 2, 3, 5], [5, 3, 7, 9] => [5, 3]
// [5], [5, 3, 7, 9] => [5]
// [null, 6, "random_string"], [5, 6, undefined, "random_string"] => [6, "random_string"]
// [5, 5, 5], [5, 6, 7] => [5]
// [5, 6, 7], [5, 5, 5] => [5]
// [5, 5, 6, 7], [5, 5, 5] => [5, 5]
// [1, 2, 3, 5], [3, 5, 7, 9]


var arrayIntersection = function(listA, listB) {
    var result = [],
        counterHash = {};
    
    listA.forEach(function(item, idx) {
        if (counterHash[item]) {
            counterHash[item] = counterHash[item] + 1;            
        } else {
            counterHash[item] = 1;
        }
    });
    
    listB.forEach(function(item, idx) {
        if (counterHash.hasOwnProperty(item) && counterHash[item] !== 0) {
            result.push(item);
            counterHash[item] = counterHash[item] - 1;
        }
    });
    
    return result;
};