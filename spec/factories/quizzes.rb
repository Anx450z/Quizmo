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

FactoryBot.define do
  factory :quiz do
    title { Faker::Movie.title }
    description { Faker::Movie.quote }
  end
end
