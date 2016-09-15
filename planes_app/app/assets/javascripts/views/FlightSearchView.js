var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: "#flightForm",
  // tagName: "li",

  events: {
    'click button': 'createFlight',
    'keydown textarea': 'checkForEnter'
    // 'click button': 'showFlight'
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
    console.log( newFlight.toJson() );
    newFlight.save().done(function () {
      console.log( newFlight.toJSON() );
    });

    app.flights.add( newFlight );
    this.$el.find("textarea").val('').focus();
  },

  // showPost: function() {
  //   app.router.navigate( "/flights/" + this.model.get( "id" ), true );
  // },

  render: function() {
    console.log("An instance of the FlightSearchView should be rendered");
    var templateMarkup = $("#flightSearchViewTemplate").html();
    this.$el.html( templateMarkup );
    // this.$el.find( 'textarea' ).focus();

    // var flightRef = this.model.get('flightRef');
    // this.$el.text( flightRef );
    // this.$el.appendTo('#flights');
  }
});
