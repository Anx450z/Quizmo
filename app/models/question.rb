class Question < ApplicationRecord
  default_scope { order(created_at: :desc) }
  
  belongs_to :quiz, counter_cache: true
  has_many :options, dependent: :destroy

  validates_presence_of :question, on: %i[create update], message: "can't be blank"

  def not_enough_options?
    options.count < 2
  end

  def contains_correct_options?
    options.pluck(:correct).any?
  end
end
