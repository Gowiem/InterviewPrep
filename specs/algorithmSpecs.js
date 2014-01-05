/* 
* @Author: Gowiem
* @Date:   2013-12-19 02:04:40
* @Last Modified by:   Gowiem
* @Last Modified time: 2014-01-05 15:37:23
*/

var Prep = Prep || {};
describe("Algorithms", function() {
  var items;
  beforeEach(function() {
    items = [49, 10, 1, 30, 40, 99, 2000, 30, 40, 87, 47];
  });

  function assertSorted(items) {
    expect(items).toEqual([1, 10, 30, 30, 40, 40, 47, 49, 87, 99, 2000]);
  }

  describe('Quicksort Algorithm', function() {
    it("should sort the array", function() {
      items = Prep.quicksort(items);
      assertSorted(items);
    });
  });

  describe('Binary Search Algorithm', function() {
    beforeEach(function() {
      items = Prep.quicksort(items);
    });

    it("should find the element in the array", function() {
      var itemIndex = Prep.binarySearch(items, 47);
      expect(itemIndex).toEqual(6);
    });

    it("shouldn't find a non existant element in the array", function() {
      var itemIndex = Prep.binarySearch(items, 48);
      expect(itemIndex).toEqual(-1);
    });
  });

  describe('Bubblesort Algorithm', function() {
    it("should sort the array", function() {
      items = Prep.bubblesort(items);
      assertSorted(items);
    });
  });

  describe('Mergesort Algorithm', function() {
    it("should sort the array", function() {
      items = Prep.mergesort(items);
      assertSorted(items);
    });
  });

});