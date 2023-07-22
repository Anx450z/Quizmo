# == Schema Information
#
# Table name: quizzes
#
#  id              :bigint           not null, primary key
#  attempts        :integer          default(0)
#  description     :string
#  questions_count :integer
#  title           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rails_helper'

RSpec.describe Quiz, type: :model do
  describe 'for new user' do
    let(:user) { create(:user) }

    context 'when quiz is created for user' do
      let(:quiz) { build(:quiz, user:) }
      it { expect(quiz).to be_valid }
    end

    context 'when quiz is created for user' do
      let(:quiz) { build(:quiz, user: nil) }
      it { expect(quiz).not_to be_valid }
    end
  end
end
