class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name
      t.boolean :watched
      t.boolean :completed
      t.string :category

      t.timestamps
    end
  end
end
