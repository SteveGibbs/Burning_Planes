class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.belongs_to :flight, index: true
      t.belongs_to :user, index: true
      t.integer :user_id
      t.text :seat_num
      t.integer :flight_id

      t.timestamps null: false
    end
  end
end
