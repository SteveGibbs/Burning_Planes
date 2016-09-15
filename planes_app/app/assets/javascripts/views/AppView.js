var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#app',

  render: function() {
    console.log("An instance of the app.AppView was created");
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html( appViewTemplate );

    // app.flights.each(function (flight) {
    //   var flightSearchView = new app.FlightSearchView({
    //     model: flight
    //   });
    //   flightSearchView.render();
    // });
    app.flights.each(function (flight) {
      var flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
    });
    var searchView = new app.FlightSearchView();
    searchView.render();
    // console.log("is this being called?");
    var seatingPlanView = new app.SeatingPlanView();
    seatingPlanView.render();
  }

});
