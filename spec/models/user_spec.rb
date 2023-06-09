# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password_digest :string
#  username        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'creating a new user' do
    let(:user) { build(:user) }
    context 'When all fields are set correctly' do
      it 'should be created successfully' do
        expect(user).to be_valid
      end
    end
  end
end
