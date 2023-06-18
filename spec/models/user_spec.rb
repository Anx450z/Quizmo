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
      @user = User.create(username: 'John', email: 'john@example.com', password: 'password', password_confirmation: 'password')
    end

    it 'should be created successfully' do
      expect(@user.username).to be('John')
    end
  end
end
