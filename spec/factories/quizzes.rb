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
#  user_id         :bigint
#
# Indexes
#
#  index_quizzes_on_user_id  (user_id)
#

FactoryBot.define do
  factory :quiz do
    association :user, factory: :user
    title { Faker::Movie.title }
    description { Faker::Movie.quote }
  end
end
