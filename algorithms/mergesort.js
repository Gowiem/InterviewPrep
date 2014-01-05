/* 
* @Author: gowie
* @Date:   2014-01-05 15:25:21
*/

var Prep = Prep || {};

Prep.mergesort = (function() {

  function merge(left, right) {
    var result = [],
        ir     = 0, 
        il     = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  function mergesort(items) {
    if (items.length < 2) {
      return items;
    }
    var middle = Math.floor(items.length / 2),
        left   = items.slice(0, middle),
        right  = items.slice(middle);
    return merge(mergesort(left), mergesort(right));
  }

  return mergesort;
})();