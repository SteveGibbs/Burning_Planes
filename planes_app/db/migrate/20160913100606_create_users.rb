class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :firstname
      t.text :lastname
      t.string :email
      t.boolean :admin, :default =>false

      t.timestamps null: false
    end
  end
end
