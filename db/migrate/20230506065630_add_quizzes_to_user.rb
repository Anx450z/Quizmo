class AddQuizzesToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :quizzes, :user
  end
end
