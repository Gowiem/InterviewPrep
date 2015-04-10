/* 
* @Author: Gowiem
* @Date:   2014-01-24 12:15:06
*/

var Prep = Prep || {};

describe("Interview Questions", function() {

  describe('Reverse String', function() {
    var sentence,
        word;
    beforeEach(function() {
      sentence = "Hey this is a sentence that should be reversed";
      word = "interview";
    });

    it('should reverse the words in place', function() {
      expect(Prep.reverseString(sentence)).toBe("yeH siht si a ecnetnes taht dluohs eb desrever");
    });

    it('should reverse a single word in place', function() {
      expect(Prep.reverseString(word)).toBe("weivretni");
    });
  });

  describe('Remove duplicate characters from String', function() {
    var string;
    beforeEach(function() {
      string = "AAA BBB C";
    });

    it("should return the string without the duplicate characters", function() {
      expect(Prep.removeDupCharacters(string)).toBe("A B C");
    });
  });


  describe('Find first non repeating character', function() {

    it("should return B", function() {
      var string = "ABCA";
      expect(Prep.findFirstNotRepeating(string)).toBe("B");
    });

    it("should return C", function() {
      var string = "ABCAXBJXDDJR";
      expect(Prep.findFirstNotRepeating(string)).toBe("C");
    });

    it("should return R", function() {
      var string = "ABCAXBJXDCDJR";
      expect(Prep.findFirstNotRepeating(string)).toBe("R");
    });
  });

});