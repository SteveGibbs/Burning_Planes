var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'tr',
  // add listener for clicks on a td, that creates a new instance of the SeatingPlanView and renders it.

  // create a variable  - var flight = this.model
  // create a new insance of the app.SeatingPlanView()
  // pass flight variable into the render method of that new instance of the app.SeatingPlanView()

  events: {
    'click td': 'renderSeats'
  },

  renderSeats: function(e) {
    e.preventDefault();
    
    var seatingPlanView = new app.SeatingPlanView();
    var flight = this.model.toJSON();
    seatingPlanView.render(flight);

  },


  render: function () {
    console.log(this.model.toJSON());

    var flightRef = this.model.get("flightref");
    var fromDestination = this.model.get("from");
    var toDestination = this.model.get("to");
    var plane = this.model.get("plane").name;
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
    var hrefEl = "<td><a href=flights/"+ href + ">" + flightRef + "</a></td>";
// If href is clicked, prevent default behaviour. Then use router to redirect to Seating plan view.

    this.$el.html( dateEl + hrefEl +  fromDestinationEl + " " + toDestinationEl + " " + planeEl + " " );
    this.$el.appendTo( "#flights" );
  }
});
