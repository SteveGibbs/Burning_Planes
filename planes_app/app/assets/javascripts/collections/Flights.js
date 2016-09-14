var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight,
  initialize: function() {
    this.on("add", function(flight) {
      console.log("A new flight has been added");
    });
  }
});
