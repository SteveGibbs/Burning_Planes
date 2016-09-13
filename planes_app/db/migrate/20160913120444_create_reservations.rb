class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.text :user_id
      t.text :seat_num
      t.text :flight_id

      t.timestamps null: false
    end
  end
end
