class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :lat
      t.string :long
      t.integer :rating
      t.string :image

      t.timestamps
    end
  end
end
