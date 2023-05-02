class Question < ApplicationRecord
  default_scope { order(created_at: :desc) }
  
  belongs_to :quiz
  has_many :options, dependent: :destroy

  validates_presence_of :question, on: %i[create update], message: "can't be blank"
end
