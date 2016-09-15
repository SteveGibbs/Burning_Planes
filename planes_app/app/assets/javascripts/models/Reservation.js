var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",
  defaults: {
  },
  initialize: function() {
    console.log("A new reservation was created");
  }
});
