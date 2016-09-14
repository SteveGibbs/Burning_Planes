var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'li',

  render: function () {

    var flightRef = this.model.get("flightref");
    var fromDestination = this.model.get("from");
    var toDestination = this.model.get("to");
    this.$el.text( flightRef + " " + fromDestination + " " + toDestination );
    this.$el.prependTo( "#flights" );
  }
});
