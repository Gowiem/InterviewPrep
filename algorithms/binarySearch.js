// Binary Search Implementation
// Date: 12/18/13
// Reference: http://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/

var Prep = Prep || {};

Prep.binarySearch = function(items, element, start, end) {
  var start  = start ? start : 0,
      end    = end ? end : items.length - 1,
      center = Math.floor((end + start) / 2);
  if (start > end) {
    return -1;
  } else if (items[center] > element) {
    return Prep.binarySearch(items, element, start, center - 1);
  } else if (items[center] < element) {
    return Prep.binarySearch(items, element, center + 1, end);
  } else if (items[center] === element) {
    return center;
  }
}