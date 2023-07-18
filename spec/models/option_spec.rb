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
require 'rails_helper'

RSpec.describe Option, type: :model do
  describe 'for question' do
    let(:question) { create(:question) }

    context 'when the option is valid' do
      let(:option) { create(:option, question:) }
      it { expect(option).to be_valid }
    end

    context 'when the option is invalid' do
      let(:option) { build(:option, question: nil) }
      it { expect(option).not_to be_valid }
    end
  end
end
