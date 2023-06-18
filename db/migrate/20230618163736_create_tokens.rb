class CreateTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :tokens do |t|
      t.string :token_code, null: false
      t.string :username
      t.integer :status, default: 0
      t.string :email

      t.timestamps
    end
  end
end
