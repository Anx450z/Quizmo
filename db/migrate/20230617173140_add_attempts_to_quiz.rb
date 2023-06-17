class AddAttemptsToQuiz < ActiveRecord::Migration[7.0]
  def change
    add_column :quizzes, :attempts, :integer, default: 0
  end
end
