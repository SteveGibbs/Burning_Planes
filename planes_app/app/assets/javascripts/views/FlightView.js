var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'tr',

  render: function () {
    var flightRef = this.model.get("flightref");
    var fromDestination = this.model.get("from");
    var toDestination = this.model.get("to");
    var plane = this.model.get("plane");
    var date = this.model.get("date");
    var plane_id = this.model.get("plane_id");
    var href = this.model.get("id");
    var dateEl = "<td>" + date + "</td>";
    var flightRefEl = "<td>" + flightRef + "</td>";
    var fromDestinationEl = "<td>" + fromDestination + "</td>";
    var toDestinationEl = "<td>" + toDestination + "</td>";
    var planeEl = "<td>" + plane + "</td>";
    var plane_idEl = "<td>" + plane_id + "</td>";
    // var hrefEl = "<a href=flights/"+ href + "<td>"+href+"</td></a>";
    var hrefEl = "<td><a href=flights/"+ href + ">" + href + "</a></td>";
// If href is clicked, prevent default behaviour. Then use router to redirect to Seating plan view.

    this.$el.html( dateEl + hrefEl + flightRefEl + fromDestinationEl + " " + toDestinationEl + " " + planeEl + " " + plane_idEl);
    this.$el.appendTo( "#flights" );
  }
});
