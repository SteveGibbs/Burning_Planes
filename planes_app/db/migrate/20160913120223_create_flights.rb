class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :flightref
      t.date :date
      t.text :to
      t.text :from
      t.text :plane

      t.timestamps null: false
    end
  end
end
