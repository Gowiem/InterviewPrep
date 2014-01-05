/* 
* @Author: Gowiem
* @Date:   2013-12-22 18:00:10
*/

var Prep = Prep || {};

Prep.bubblesort = (function() {

  function swap(items, left, right) {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  }

  function bubblesort(items) {
    var length = items.length;
    for(var i = 0; i < length; i++) {
      for(var j = 0; j < length - i; j++) {
        if (items[j] > items[j + 1]) {
          swap(items, j, j + 1);
        }
      }
    }
    return items;
  }

  return bubblesort;
})();