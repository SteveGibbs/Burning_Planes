var app = app || {};

app.Seating_Plan = Backbone.Collection.extend({
  url: '/flights',
  model: app.Seat,
  initialize: function() {
    this.on("add", function(seat) {

      var seatView = new app.SeatingPlanView({
        model: seat
      });
      seatView.render();
    });
    this.on("add", function(seat) {
      console.log("A new seat was added to this!!");
    });
  }
});
