class AddOptionsToQuestion < ActiveRecord::Migration[7.0]
  def change
    add_reference :options, :question
  end
end
