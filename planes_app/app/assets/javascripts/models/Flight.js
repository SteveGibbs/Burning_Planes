var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",
  defaults: {
    content: "Welcome to burning airlines."
  },
  initialize: function() {
    console.log("A new flight was created");
  }
});
