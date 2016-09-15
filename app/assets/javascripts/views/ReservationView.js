var app = app || {};


app.ReservationView = Backbone.View.extend({
  el: '.reservations', //call our reservation


  render: function() {

    console.log("An instance of the ReservationView should be rendered");
    var templateMarkup = $("#reservationViewTemplate").html();
    this.$el.html( templateMarkup );
    // this.$el.find( 'textarea' ).focus();

    // var flightRef = this.model.get('flightRef');
    // this.$el.text( flightRef );
    // this.$el.appendTo('#flights');
  }


});
