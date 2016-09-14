var app = app || {};

// Namespace our collection within the app object:
app.AppRouter = Backbone.Router.extend({
  // Map the route "" (eg www.myapp.com/#  (an empty fragment)) to a method called 'initializeSecrets'
  routes: {
    '': 'initializeFlights'
  },

  initializeFlights: function () {
    var av = new app.AppView();
    av.render();
  }
});
