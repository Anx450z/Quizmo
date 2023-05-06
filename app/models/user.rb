class User < ApplicationRecord
  has_secure_password
  validates_presence_of :username, uniqueness: true, length: {minimum:4, maximum:30}
  validates_presence_of :email, uniqueness: true, length: {minimum:6, maximum:30}
  before_save :downcase_email

  has_many :quizzes, dependent: :destroy

  private

  def downcase_email
    self.email.downcase!
  end
end
