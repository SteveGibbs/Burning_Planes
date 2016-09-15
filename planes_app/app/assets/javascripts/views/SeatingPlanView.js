var app = app || {};

app.SeatingPlanView = Backbone.View.extend({
  el: '#seatPlanViewForm', //call our plane div


  render: function (flight) {
    var characters = "ABCDEFGHIJKL";
    var gridNo;
    var gridLocation;

    var rows = flight.plane.row;
    var columns = flight.plane.column;
    var planesize = function() {
      var columnWidth = columns * 30;
      $(".app2").css("width", columnWidth + "px");
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
            // $(".board").append($tile);
            $(".app2").append($tile);

            $tile.addClass("seat");
            var $seating = $("<p>" + letter + gridNo + "<p>");
            $(".seat").append($seating);
          }
        }
        planesize();
    };

 createGrid();
 console.log(this.$el + "testing this");
this.$el.appendTo("#seatPlanViewForm");


    $(document).ready(function(){
      createGrid();
    console.log("will this create a grid");
    });



    // this.$el.html( dateEl + hrefEl + flightRefEl + fromDestinationEl + " " + toDestinationEl + " " + planeEl + " " + plane_idEl);
    // this.$el.appendTo( "#flights" );
  }


});


// create_table "reservations", force: :cascade do |t|
//   t.integer  "flight_id"
//   t.integer  "user_id"
//   t.text     "seat_num"
//   t.datetime "created_at", null: false
//   t.datetime "updated_at", null: false
// end
