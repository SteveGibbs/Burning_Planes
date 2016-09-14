var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'li',

  render: function () {

    var content = this.model.get("flightref");
    this.$el.text( content );
    this.$el.prependTo( "#flights" );
  }
});
