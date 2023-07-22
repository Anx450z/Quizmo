# == Schema Information
#
# Table name: scores
#
#  id         :bigint           not null, primary key
#  score      :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quiz_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_scores_on_quiz_id              (quiz_id)
#  index_scores_on_user_id              (user_id)
#  index_scores_on_user_id_and_quiz_id  (user_id,quiz_id) UNIQUE
#
FactoryBot.define do
  factory :score do
    association :user, factory: :user
    association :quiz, factory: :quiz
    score { 0 }
  end
end
