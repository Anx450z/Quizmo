class MarkedOption < ApplicationRecord
  validates :question_id, uniqueness: {scope: :marked_option}
end
