# == Schema Information
#
# Table name: scores
#
#  id         :bigint           not null, primary key
#  score      :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quiz_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_scores_on_quiz_id              (quiz_id)
#  index_scores_on_user_id              (user_id)
#  index_scores_on_user_id_and_quiz_id  (user_id,quiz_id) UNIQUE
#
require 'rails_helper'

RSpec.describe Score, type: :model do
  context 'when valid score is created' do
    let!(:score) { build(:score) }
    it { expect(score).to be_valid }
  end

  context 'when user is nil score is created' do
    let!(:score) { build(:score, user: nil) }
    it { expect(score).not_to be_valid }
  end

  context 'when quiz is nil score is created' do
    let!(:score) { build(:score, quiz: nil) }
    it { expect(score).not_to be_valid }
  end

  context 'when quiz and user are nil score is created' do
    let!(:score) { build(:score, quiz: nil, user: nil) }
    it { expect(score).not_to be_valid }
  end

  context 'when quiz and user are are created twice' do
    let!(:quiz) { build(:quiz) }
    let!(:user) { build(:user) }
    let!(:score) { create(:score, user:, quiz:) }
    let!(:score2) { build(:score, user:, quiz:) }
    it 'should not be created twice' do
      expect(score).to be_valid
      expect(score2).not_to be_valid
    end
  end
end
