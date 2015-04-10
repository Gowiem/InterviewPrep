/* 
* @Author: Gowiem
* @Date:   2014-01-24 12:07:17
*/

var Prep = Prep || {};

// Reversing the words in a string.
// Write a function to reverse the order of words in a string in place.

Prep.reverseString = function(string) {
  var words = string.split(' '),
      result = "",
      currentWord = "",
      i;
  words.forEach(function(word, idx) {
    for (i = word.length; i >= 0; i--) {
      currentWord += word.charAt(i);
    }
    result += idx === words.length - 1 ? currentWord : currentWord + " ";
    currentWord = "";
  });

  return result;
}


// Remove duplicate chars from a string ("AAA BBB" -> "A B")

Prep.removeDupCharacters = function(string) {
  var foundChars = {},
      result = "",
      character;

  for (var i = 0; i < string.length; i++) {
    character = string.charAt(i);

    if (!/[A-Za-z\d]/.test(character)) {
      result += character;
    } else if (!foundChars.hasOwnProperty(character)) {
      foundChars[character] = 1;
      result += character;
    }
  }

  return result;
}

// Find the first non-repeating character in a string:("ABCA" -> B )

Prep.findFirstNotRepeating = function(string) {
  var result,
      character;

  for (var i = 0; i < string.length; i++) {
    character = string.charAt(i);
    console.log("indexOf")
    if (string.indexOf(character) === i && string.lastIndexOf(character) === i) {
      return character;
    }
  }

  return null;
}