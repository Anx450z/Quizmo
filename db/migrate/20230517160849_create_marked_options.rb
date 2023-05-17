class CreateMarkedOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :marked_options do |t|
      t.bigint :quiz_id
      t.bigint :question_id
      t.bigint :user_id
      t.integer :marked_option
      t.timestamps
    end
  end
end
