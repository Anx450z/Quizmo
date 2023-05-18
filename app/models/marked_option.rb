class MarkedOption < ApplicationRecord
  validates :question_id, uniqueness: {scope: :marked_option}

  belongs_to :quiz
  belongs_to :questions
end
