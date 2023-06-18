# frozen_string_literal: true

# == Schema Information
#
# Table name: marked_options
#
#  id            :bigint           not null, primary key
#  marked_option :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  question_id   :bigint
#  quiz_id       :bigint
#  user_id       :bigint
#
class MarkedOption < ApplicationRecord
  validates :question_id, uniqueness: { scope: :marked_option }
  validates_presence_of :marked_option

  belongs_to :quiz
  belongs_to :question
end
