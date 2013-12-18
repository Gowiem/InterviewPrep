
var Prep = Prep || {};


var getPrepInput = function(prepItem) {
  var input = $("#" + prepItem + " .input").text().split(',');
  return input.map(function(item) {
    return parseInt(item);
  });
}

var setPrepOutput = function(prepItem, output) {
  $('#' + prepItem + " .output").text(output);
}

$(document).ready(function() { 
  var prepItems = [$('.prepItem').text()];
  prepItems.forEach(function(item, idx) {
    var item = item.toLowerCase(),
        input = getPrepInput(item),
        output;
    output = Prep[item].run(input);
    setPrepOutput(item, output);
  });
});