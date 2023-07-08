require 'factory_bot_rails'

include FactoryBot::Syntax::Methods

# for 3 users create

user = User.create(username: 'test', password: 'password', password_confirmation: 'password', email: 'test@example.com')
5.times do
  quiz = create(:quiz, user:)
  10.times do
    question = create(:question, quiz:)
    4.times do
      create(:option, question:)
    end
  end
end
