# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  question   :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quiz_id    :bigint
#
# Indexes
#
#  index_questions_on_quiz_id  (quiz_id)
#
require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'for quiz' do
    let(:quiz) { create(:quiz) }

    context 'when the question is valid' do
      let(:question) { create(:question, quiz:) }
      it { expect(question).to be_valid }
    end

    context 'when the question is invalid' do
      let(:question) { build(:question, quiz: nil) }
      it { expect(question).not_to be_valid }
    end
  end
end
