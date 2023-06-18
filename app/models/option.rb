# == Schema Information
#
# Table name: options
#
#  id          :bigint           not null, primary key
#  correct     :boolean          default(FALSE)
#  option_text :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :bigint
#
# Indexes
#
#  index_options_on_question_id  (question_id)
#
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
