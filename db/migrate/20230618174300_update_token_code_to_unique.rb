class UpdateTokenCodeToUnique < ActiveRecord::Migration[7.0]
  def change
    add_index :tokens, :token_code, unique: true
  end
end
