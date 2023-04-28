class AddQuestiontoQuiz < ActiveRecord::Migration[7.0]
  def change
    add_reference :questions, :quiz
  end
end
