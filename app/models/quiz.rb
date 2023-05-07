class Quiz < ApplicationRecord
  default_scope {order(created_at: :desc)}

  has_many :questions, dependent: :destroy
  belongs_to :user

  validates_presence_of :title, on: %i[create update], message: "title is required"

  def all_questions
    questions.left_joins(:options).select('questions.*, COUNT(CASE
      WHEN options.id > 2 THEN true ELSE false END) AS number_of_options, SUM(CASE WHEN options.correct THEN 1 ELSE 0 END) AS correct_options
      ').group('questions.id')   
  end

  def all_options
    questions.joins(:options).select('questions.id, options.*')
  end

  def questions_with_options
    @all_options = all_options #* instance variable helps to cache this value so same query does not executes multiple times 
    @all_questions = all_questions

    @all_questions.map do |question| {
      question:,
      options: @all_options.select{ |option| question[:id] == option[:question_id] }
    }
    end
  end
end
