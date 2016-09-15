var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",
  defaults: {
    flightRef: "testFlight",
    date: "31/09/2016",
    to: "Sydney",
    from: "Melbourne",
    plane_id: "Plane.name" //params id 1
  },
  initialize: function() {
    console.log("A new flight was created");
  }
});
