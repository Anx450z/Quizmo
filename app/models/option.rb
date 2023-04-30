class Option < ApplicationRecord
  belongs_to :question
  validates_presence_of :option_text, on: %i[create update], message: "can't be blank"
end
