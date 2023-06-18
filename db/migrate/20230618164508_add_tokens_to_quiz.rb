class AddTokensToQuiz < ActiveRecord::Migration[7.0]
  def change
    add_reference :tokens, :quiz
  end
end
