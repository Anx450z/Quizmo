class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.belongs_to :user
      t.belongs_to :quiz
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
