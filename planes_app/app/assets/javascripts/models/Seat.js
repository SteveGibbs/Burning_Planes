var app = app || {};

app.Seat = Backbone.Model.extend({
  urlRoot: "/flights",
  defaults: {
    // flight_id: "99",
    // user_id: "33",
    // seat_num: "A1",
  },
  initialize: function() {
    console.log("A new seat from seat js was created");
  }
});


// create_table "reservations", force: :cascade do |t|
//   t.integer  "flight_id"
//   t.integer  "user_id"
//   t.text     "seat_num"
//   t.datetime "created_at", null: false
//   t.datetime "updated_at", null: false
// end
