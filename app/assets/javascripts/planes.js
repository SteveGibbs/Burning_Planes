var characters = "ABCDEFGHIJKL";
var gridNo;
var gridLocation;

var planesize = function() {
  var columnWidth = columns * 30;
  $(".board").css("width", columnWidth + "px");
  console.log(columnWidth);
};

var createGrid = function() {
  var rowChar = characters.slice(0, rows);
    for (var char in rowChar) {
    var letter = char;
      for (var i = 0; i<columns; i++) {
        gridNo = i+1;
        gridLocation = letter+gridNo;
        var $tile = $('<div class=' + letter + ' id =' + gridNo + '></div>');
        $(".board").append($tile);
          $tile.addClass("seat");
        var $seating = $("<p>" + letter + gridNo + "</p>");
        $(".seat").append($seating);
      }
    }
    planesize();
};

$(document).ready(function(){
  createGrid();
});
