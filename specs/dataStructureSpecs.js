/* 
* @Author: Gowiem
* @Date:   2014-01-11 19:11:37
*/

var Prep = Prep || {};

describe("Data Structures", function() {
  var items, 
      itemsSize;
  beforeEach(function() {
    items = [49, 10, 1, 30, 99, 2000, 87, 47];
    itemsSize = items.length;
  });

  describe('Binary Search Tree', function() {
    var bst;
    beforeEach(function() {
      bst = Prep.BST(items);
    });

    it('should have the correct size', function() {
      expect(bst.size()).toBe(itemsSize);
    });
  });

});