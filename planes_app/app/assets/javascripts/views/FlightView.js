var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'td',

  render: function () {

    var flightRef = this.model.get("flightref");
    var fromDestination = this.model.get("from");
    var toDestination = this.model.get("to");
    var plane = this.model.get("plane");
    var date = this.model.get("date");
    var href = this.model.get("id");
    this.$el.html( date + " " + "<ahref =" + href + ">" + flightRef + "</a> " + fromDestination + " " + toDestination + " " + plane + "<br>" );
    this.$el.appendTo( "#flights" );
  }
});
