class Quiz < ApplicationRecord
  default_scope {order(created_at: :desc)}

  has_many :questions, dependent: :destroy

  validates_presence_of :title, on: %i[create update], message: "title is required"
end
