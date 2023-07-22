require 'factory_bot_rails'

include FactoryBot::Syntax::Methods

# for users create quiz with questions and options

user = User.create(username: 'test', password: 'password', password_confirmation: 'password', email: 'test@example.com')
p 'user created'
5.times do
  quiz = create(:quiz)
  Score.create(user:, quiz:)
  p 'quiz created'
  10.times do
    question = create(:question, quiz:)
    p 'question created'
    4.times do
      create(:option, question:)
      p 'option created'
    end
  end
end
