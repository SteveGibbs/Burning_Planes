var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: "#flightView",

  events: {
    'click button': 'createFlight',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function(e) {
    var ENTER_KEY = 13;
    if ( event.which === ENTER_KEY ) {
      e.preventDefault();
      this.createSecret();
    }

  },

  createFlight: function (e) {
    var newFlight = new app.Flight();
    var userInput = this.$el.find("textarea").val();
    newFlight.set("content", userInput);
    newFlight.save().done(function () {
      console.log(newFlight.toJSON());
    });

    app.flights.add( newFlight );
    this.$el.find("textarea").val('').focus();
  },

  render: function() {
    var flightSearchViewTemplate = $("#flightSearchViewTemplate").html();
    this.$el.html( flightSearchViewTemplate );
    // this.$el.find( 'textarea' ).focus();
  }
});
