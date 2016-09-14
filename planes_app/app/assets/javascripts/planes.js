// var rows = 4;
// var columns = 10;
var characters = "ABCDEFGHIJKL";
// var rowChar = characters.slice(0, rows);
var gridNo;
var gridLocation;

var planesize = function() {
  var columnWidth = columns * 30;
  $(".board").css("width", columnWidth + "px");
  console.log(columnWidth);
};

var createGrid = function() {
  var rowChar = characters.slice(0, rows);
    for (char of rowChar) {
    var letter = char;
      for (var i = 0; i<columns; i++) {
        gridNo = i+1;
        gridLocation = letter+gridNo;
        var $tile = $('<div class=' + letter + ' id =' + gridNo + '></div>');
        $(".board").append($tile);
        $tile.addClass("seat");
      }
    }
    planesize();
};

$(document).ready(function(){
  createGrid();
});
