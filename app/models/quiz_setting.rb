class QuizSetting < ApplicationRecord
 belongs_to :quiz, dependent: :destroy
end
