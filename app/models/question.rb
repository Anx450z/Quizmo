class Question < ApplicationRecord
  belongs_to :quiz
  has_many :options, dependent: :destroy

  validates_presence_of :question, on: %i[create update], message: "can't be blank"
end
