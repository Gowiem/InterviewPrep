/* 
* @Author: Gowiem
* @Date:   2013-12-19 02:04:40
* @Last Modified by:   Gowiem
* @Last Modified time: 2013-12-19 03:08:08
*/

var Prep = Prep || {};
describe("Algorithms", function() {
  var items;
  beforeEach(function() {
    items = [49, 10, 1, 30, 40, 99, 2000, 30, 40, 87, 47];
  });

  describe('Quicksort Algorithm', function() {
    it("should sort the array", function() {
      items = Prep.quicksort(items);
      expect(items).toEqual([1, 10, 30, 30, 40, 40, 47, 49, 87, 99, 2000]);
    });
  });

  describe('Binary Search Algorithm', function() {
    beforeEach(function() {
      items = Prep.quicksort(items.sort());
    });

    it("should find the element in the array", function() {
      var itemIndex = Prep.binarySearch(items, 47);
      expect(itemIndex).toEqual(6);
    });

    it("shouldn't find a non existant element in the array", function() {
      var itemIndex = Prep.binarySearch(items, 48);
      expect(itemIndex).toEqual(-1);
    });
  })

});