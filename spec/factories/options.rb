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
FactoryBot.define do
  factory :option do
    association :question, factory: :question
    option_text { Faker::Movie.title }
    correct { rand(1..8) > 6 }
  end
end
