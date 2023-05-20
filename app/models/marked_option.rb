class MarkedOption < ApplicationRecord
  validates :question_id, uniqueness: {scope: :marked_option}
  validates_presence_of :marked_option

  belongs_to :quiz
  belongs_to :question
end
