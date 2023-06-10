class Option < ApplicationRecord
  belongs_to :question
  validates_presence_of :option_text, on: %i[create update], message: "can't be blank"
  # validate :check_blank

  # def check_blank
  #  unless (option_text.blank? || option_text.scan(/<p>(.*?)<\/p>/).flatten.blank?)
  #     self.errors.add(:option_text,"can't be blank")
  #  end
  # end
end
