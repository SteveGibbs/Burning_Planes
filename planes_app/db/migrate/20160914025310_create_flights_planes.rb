class CreateFlightsPlanes < ActiveRecord::Migration
  def change
    create_table :flights_planes do |t|
      t.integer :plane_id
      t.integer :flight_id

    end
  end
end
