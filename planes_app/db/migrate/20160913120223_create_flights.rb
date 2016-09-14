class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :flightref
      t.date :date
      t.text :to
      t.text :from
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
