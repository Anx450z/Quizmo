# frozen_string_literal: true

# == Schema Information
#
# Table name: quiz_settings
#
#  id               :bigint           not null, primary key
#  correct_mark     :float            default(1.0)
#  duration         :integer          default(300)
#  end_time         :datetime
#  negative_mark    :float            default(0.0)
#  negative_marking :boolean          default(FALSE)
#  start_time       :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  quiz_id          :bigint
#
# Indexes
#
#  index_quiz_settings_on_quiz_id  (quiz_id)
#
class QuizSetting < ApplicationRecord
  belongs_to :quiz, dependent: :destroy
end
