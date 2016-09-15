var app = app || {};

$(document).ready(function() {
  app.flights = new app.Flights();
  app.flights.fetch().done(function () {
    app.router = new app.AppRouter();
    Backbone.history.start();

  app.reservations = new app.Reservations();
  app.reservations.fetch().done(function () {
    app.router = new app.AppRouter();
  });
  });
});
