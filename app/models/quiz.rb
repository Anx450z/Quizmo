# frozen_string_literal: true

class Quiz < ApplicationRecord
  default_scope { order(created_at: :desc) }

  has_many :questions, dependent: :destroy
  has_many :marked_options, dependent: :destroy
  belongs_to :user
  has_one :quiz_setting

  validates_presence_of :title, on: %i[create update], message: 'title is required'

  def all_questions
    questions.left_joins(:options).select('questions.*, COUNT(CASE
      WHEN options.id > 2 THEN true ELSE false END) AS number_of_options, SUM(CASE WHEN options.correct THEN 1 ELSE 0 END) AS correct_options
      ').group('questions.id')
  end

  # TODO: Update with quiz_setting model
  def shuffled_questions
    # all_questions.shuffle
    all_questions
  end

  def all_options
    questions.joins(:options).select('questions.id, options.*')
  end

  def all_unmarked_options
    questions.joins(:options).select('questions.id, options.id, options.option_text, options.question_id')
  end

  def attempted_questions
    questions.joins(:marked_options).pluck(:question_id)
  end

  def valid_question?(question)
    (question[:correct_options]).positive? && question[:number_of_options] > 1
  end

  def test_questions
    @selected_options = selected_options.uniq
    @shuffled_questions = shuffled_questions
    @attempted_questions = attempted_questions
    @shuffled_questions.map do |question|
      next unless valid_question?(question)

      {
        question:,
        options: @selected_options.select { |option| question[:id] == option[:question_id] },
        question_attempted: !@attempted_questions.include?(question[:id]).nil?
      }
    end.compact
  end

  # TODO: Better way to do this? maybe using scope?
  def selected_options
    all_unmarked_options.joins('LEFT JOIN marked_options ON options.question_id = marked_options.question_id')
                        .select('options.option_text, CASE WHEN options.id = marked_options.marked_option THEN 1 ELSE 0 END AS selected')
  end

  def quiz_score
    @correct_options = all_options.select { |option| option[:correct] }
    @selected_options = selected_options
    (@correct_options.pluck(:id) & @selected_options.pluck(:marked_option)).length
  end

  def questions_with_options
    @all_options = all_options # ? instance variable helps to cache this value so same query does not executes multiple times
    @all_questions = all_questions

    @all_questions.map do |question|
      {
        question:,
        options: @all_options.select { |option| question[:id] == option[:question_id] }
      }
    end
  end
end
