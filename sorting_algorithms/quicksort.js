// Quicksort Implementation
// Date: 12/18/13
// Reference: http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
var Prep = Prep || {};

Prep.quicksort = (function() {
  function quicksort(items, left, right) {
    var index;
    if (items.length > 1) {

      // Defaults for left and right
      left = typeof left === 'number' ? left : 0;
      right = typeof right === 'number' ? right : items.length - 1;

      index = partition(items, left, right);

      if (left < index - 1) {
        quicksort(items, left, index - 1);
      }

      if (index < right) {
        quicksort(items, index, right);
      }
    }

    return items;
  }

  function partition(items, left, right) {
    var pivot = items[Math.floor((left + right) / 2)],
        i = left,
        j = right;

    while (i <= j) {
      // Find the indexes of the items we need to swap as they're either larger
      // or smaller than our pivot
      while (items[i] < pivot) { i++; }
      while (items[j] > pivot) { j--; }

      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }

    return i;
  }

  function swap(items, left, right) {
    var temp = items[left];
    items[left]  = items[right];
    items[right] = temp;
  }

  return {
    run: function(input) {
      return quicksort(input);
    }
  }
})();
