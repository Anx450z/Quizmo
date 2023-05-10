class Option < ApplicationRecord
  default_scope { order(created_at: :desc) }

  belongs_to :question
  validates_presence_of :option_text, on: %i[create update], message: "can't be blank"
end
