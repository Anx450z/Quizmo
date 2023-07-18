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
    context 'When all fields are set correctly' do
      let(:user) { build(:user) }
      it 'should be created successfully' do
        expect(user).to be_valid
      end
    end

    context 'When some fields are empty' do
      let(:user) { build(:user, username: nil) }
      it 'should be not create user' do
        expect(user).not_to be_valid
        expect(user.errors.messages[:username]).to include("can't be blank")
      end
    end

    context 'When some fields are empty' do
      let(:user) { build(:user, email: nil) }
      it 'should be not create user' do
        expect(user).not_to be_valid
        expect(user.errors.messages[:email]).to include("can't be blank")
      end
    end

    context 'When all fields are empty' do
      let(:user) { build(:user, password: nil) }
      it 'should be not create user' do
        expect(user).not_to be_valid
        expect(user.errors.messages[:password]).to include("can't be blank")
      end
    end
  end
end
