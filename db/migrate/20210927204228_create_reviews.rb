class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :remarks
      t.integer :restaurant_id
      t.integer :user_id

      t.timestamps
    end
  end
end
