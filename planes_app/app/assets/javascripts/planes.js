var rows = 4;
var columns = 6;
var characters = "ABCD";
var gridNo;
var squares = rows * columns;
var gridLocation;

var createGrid = function() {
  for (char of characters) {
  var letter = char;
    for (var i = 0; i<columns; i++) {
      gridNo = i+1;
      gridLocation = letter+gridNo;
      console.log(letter, gridNo);
      var $tile = $('<div class=' + letter + ' id =' + gridNo + '></div>');
      $(".board").append($tile);
      $tile.addClass("seat");
    }
  }
};

$(document).ready(function(){
  createGrid();
})
