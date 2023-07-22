class AddUniquenessToQuizAndUser < ActiveRecord::Migration[7.0]
  def change
    add_index :scores, [:user_id, :quiz_id], unique: true
  end
end
