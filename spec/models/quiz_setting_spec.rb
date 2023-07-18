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
#  quiz_type        :integer          default(0)
#  start_time       :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  quiz_id          :bigint
#
# Indexes
#
#  index_quiz_settings_on_quiz_id  (quiz_id)
#
require 'rails_helper'

RSpec.describe QuizSetting, type: :model do
  describe 'for quiz' do
    let(:quiz) { create(:quiz) }

    context 'when the quiz_setting is valid' do
      let(:quiz_setting) { create(:quiz_setting, quiz:) }
      it { expect(quiz_setting).to be_valid }
    end

    context 'when the quiz_setting is invalid' do
      let(:quiz_setting) { build(:quiz_setting, quiz: nil) }
      it { expect(quiz_setting).not_to be_valid }
    end
  end
end
