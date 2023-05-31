class CreateQuizSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :quiz_settings do |t|
      t.float :correct_mark, default: 1.0
      t.boolean :negative_marking, default: false
      t.float :negative_mark, default: 0.0
      t.datetime :start_time
      t.datetime :end_time
      t.integer :duration , default: 300
      t.timestamps
    end

    add_reference :quiz_settings , :quiz
  end
end
