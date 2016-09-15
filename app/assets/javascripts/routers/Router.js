var app = app || {};

// Namespace our collection within the app object:
app.AppRouter = Backbone.Router.extend({
  // Map the route "" (eg www.myapp.com/#  (an empty fragment)) to a method called 'initializeSecrets'
  routes: {
    // '': {'initializeFlights' : 'initializeSeating_Plan'},
  '': 'initializeFlights',
    '*error': 'noRouteFound',
    // 'flights/:id': 'showFlight'
  },

  noRouteFound: function() {
    $("#app").html("<h1>There is nothing here!!</div>");
  },

  initializeFlights: function () {
    var av = new app.AppView();
    av.render();
  }

// showFlight: function(id){
//   var flight = app.flights.get(id);
//
// }

  // initializeSeating_Plan: function() {
  //   var av2 = new app.AppView();
  //   av2.render();
  //
  // }
});
