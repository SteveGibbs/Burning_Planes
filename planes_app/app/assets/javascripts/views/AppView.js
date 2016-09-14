var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#app',

  render: function() {
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html( appViewTemplate );

    app.flights.each(function (flight) {
      var flightView = new app.FlightView({
        model: flight
      });
      // { model: flight }
      flightView.render();
    });
  }
});
