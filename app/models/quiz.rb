class Quiz < ApplicationRecord
  default_scope { order(created_at: :desc) }

  has_many :questions, dependent: :destroy
  has_many :marked_options
  belongs_to :user

  validates_presence_of :title, on: %i[create update], message: 'title is required'

  def all_questions
    questions.left_joins(:options).select('questions.*, COUNT(CASE
      WHEN options.id > 2 THEN true ELSE false END) AS number_of_options, SUM(CASE WHEN options.correct THEN 1 ELSE 0 END) AS correct_options
      ').group('questions.id')
  end

  # TODO: Update with quiz_setting model
  def shuffled_questions
    all_questions.shuffle
  end

  def all_options
    questions.joins(:options).select('questions.id, options.*')
  end

  def all_unmarked_options
    questions.joins(:options).select('questions.id, options.id, options.option_text, options.question_id')
  end

  def valid_question?(question)
    question[:correct_options] > 0 && question[:number_of_options] > 1
  end

  def test_questions
    @all_unmarked_options = selected_options
    @shuffled_questions = shuffled_questions

    @shuffled_questions.map do |question|
      {
        question:,
        options: @all_unmarked_options.select{ |option| question[:id] == option[:question_id]}
      } if valid_question?(question)
    end.compact
  end

  # TODO: Better way to do this? maybe using scope?
  def selected_options
    all_unmarked_options.joins('LEFT JOIN marked_options ON options.question_id = marked_options.question_id')
                        .select('options.option_text, CASE WHEN options.id = marked_options.marked_option THEN 1 ELSE 0 END AS selected')
  end

  def quiz_score
    @correct_options = all_options.select{ |option| option[:correct] }
    # score = (@correct_options.pluck(:id) & selected_options.pluck(:marked_option)).length
  end

  def questions_with_options
    @all_options = all_options # * instance variable helps to cache this value so same query does not executes multiple times
    @all_questions = all_questions

    @all_questions.map do |question|
      {
        question:,
        options: @all_options.select { |option| question[:id] == option[:question_id] }
      }
    end
  end
end
