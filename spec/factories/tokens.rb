# == Schema Information
#
# Table name: tokens
#
#  id         :bigint           not null, primary key
#  email      :string
#  status     :integer          default("active")
#  token_code :string           not null
#  username   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quiz_id    :bigint
#
# Indexes
#
#  index_tokens_on_quiz_id     (quiz_id)
#  index_tokens_on_token_code  (token_code) UNIQUE
#
FactoryBot.define do
  factory :token do
    token_code { "MyString" }
    username { "MyString" }
    status { 1 }
    email { "MyString" }
  end
end
