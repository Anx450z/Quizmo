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
FactoryBot.define do
  factory :question do
    association :quiz, factory: :quiz
    question { Faker::Quotes::Shakespeare.hamlet_quote }
  end
end
