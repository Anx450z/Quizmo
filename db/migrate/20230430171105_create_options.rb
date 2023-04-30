class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.string :option_text, null: false
      t.boolean :correct, default: false

      t.timestamps
    end
  end
end
